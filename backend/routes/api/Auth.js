const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const { check, validationResult } = require("express-validator");
const errorFormatter = require("../../controllers/errorFormatter");
const { sendSMS } = require("../../utils");

const auth = require("../../middleware/auth");

// Models
const User = require("../../models/users");
const Roles = require("../../models/roles");
const TwoStepAuth = require("../../models/two_step_auth");

//setting router
const router = express.Router();

function generate4Digits() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

/**
 * @route   POST auth/register
 * @desc    Insert new user by admin
 * @access  Public
 */
router.post(
  "/register",
  [
    check("email", "Email is not valid").isEmail(),
    check("phone", "Le numéro de téléphone est requis").not().isEmpty(),
    check("first_name", "Le prénom est requis").not().isEmpty(),
    check("last_name", "Le nom de famille est obligatoire").not().isEmpty(),
    check("password", "le mot de passe est requis").not().isEmpty(),
    check("role_id", "Role id is requires").not().isEmpty(),
    check("nid", "Role id is requires").not().isEmpty(),
  ],
  async (req, res) => {
    //checking errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {
      email,
      phone,
      first_name,
      last_name,
      middle_name,
      password,
      role,
      role_id,
      nid,
    } = req.body;

    try {
      // CHECK IF THE USER EXISTS
      let user = await User.getUserByEmailOrNid(email, phone, nid);
      if (user.rowCount > 0) {
        return res
          .status(400)
          .json(
            errorFormatter(
              "L'e-mail ou l'identifiant ou le numéro de téléphone est déjà dans le système"
            )
          );
      } // user exist

      // START TO CREATE A USER
      const userPassword = password;
      const userId = uuid.v4();

      const newUser = {
        user_id: userId,
        email,
        phone,
        password: userPassword,
        first_name,
        last_name,
        middle_name,
        phone,
        role_id,
        nid,
      };

      // register user
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(userPassword, salt);

      let registerNewUser = await User.addNewUser(newUser);

      if (registerNewUser.rowCount > 0) {
        // hide the password
        registerNewUser.password = null;
      } else {
        return res
          .status(400)
          .json(errorFormatter("échec de la création de l'utilisateur"));
      }

      console.table({
        username: newUser.email,
        password: userPassword,
      });

      delete newUser.password; // clear the password

      return res.status(200).json({
        msg: "utilisateur créé avec succès",
        user: newUser,
        role_id: role,
      });
    } catch (error) {
      console.log({ ...error });
      return res.status(500).json({
        errors: [
          {
            msg: "erreur du serveur",
            error: error,
          },
        ],
      });
    }
  }
);

// /**
//  * @route   POST auth/login
//  * @desc    Login the user
//  * @access  Public
//  */
router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "le mot de passe est requis").not().isEmpty(),
  ],
  async (req, res) => {
    //checking errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      // CHECK IF THE USER EXISTS
      let DBuser = await User.login(email);

      if (DBuser.rowCount <= 0) {
        // customErrors.push("Failed to login");
        return res.status(400).json({
          errors: [
            {
              msg: "votre email ou votre mot de passe sont incorrects",
              error: null,
            },
          ],
        });
      }

      // once the users are not conencted to the database they will see this error
      if (DBuser === undefined) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Erreur de connexion!" }] });
      }

      const user = DBuser.rows[0];
      // check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [
            {
              msg: "votre email ou votre mot de passe sont incorrects",
              error: null,
            },
          ],
        });
      }

      let two_step_active = !!process.env.TWO_STEP_AUTHENTICATION;
      console.log({ two_step_active });
      if (two_step_active === true) {
        const code_generated = generate4Digits();

        const messageSent = await sendSMS(
          user.phone,
          `Code: ${code_generated}`
        );

        if (!messageSent)
          return res.status(400).json({
            errors: [
              {
                msg: "Failed so send the message, try again later",
                error: "error",
              },
            ],
          });

        await TwoStepAuth.generateAuth({
          user_id: user.user_id,
          email,
          code: code_generated,
          phone: user.phone,
          generated_time: new Date(),
          role_id: user.role_id,
        });

        console.table({ code: code_generated });

        return res
          .status(200)
          .json({ auth_active: true, phone: user.phone, email: email });
      } else {
        // create a payload
        const payload = {
          user: {
            id: user.user_id,
            role: user.role_id,
          },
        };
        const userDetails = user;
        delete userDetails.password;

        // Return jsonwebtoken (allow to login and login automatically)
        jwt.sign(
          // sign
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 56000 },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({ auth_active: false, token }); // send it back to the client
          }
        );
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        errors: [
          {
            msg: "erreur du serveur",
            errormsg: error.message,
            error: error,
          },
        ],
      });
    }
  }
);

router.post(
  "/check-code",
  [
    check("email", "Email is required").isEmail(),
    check("code", "the code is required").not().isEmpty(),
  ],
  async (req, res) => {
    //checking errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, code } = req.body;

    try {
      let DbCode = await TwoStepAuth.getGeneratedAuth({
        email,
        code,
      });

      if (DbCode.rowCount <= 0)
        return res.status(400).json({
          errors: [
            {
              msg: "The code you provided is incorrect or expired",
              error: "",
            },
          ],
        });

      await TwoStepAuth.clearGeneratedAuth(email);

      let data = DbCode.rows[0];

      // create a payload
      const payload = {
        user: {
          id: data.user_id,
          role: data.role_id,
        },
      };

      // Return jsonwebtoken (allow to login and login automatically)
      jwt.sign(
        // sign
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 56000 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token }); // send it back to the client
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        errors: [
          {
            msg: "erreur du serveur",
            errormsg: error.message,
            error: error,
          },
        ],
      });
    }
  }
);

router.put(
  "/edit-profile",
  [
    check("email", "Email is required").isEmail(),
    check("first_name", "First name is required").not().isEmpty(),
    check("last_name", "Last name is required").not().isEmpty(),
    check("phone", "the phone is required").not().isEmpty(),
  ],
  auth,
  async (req, res) => {
    console.log("hello");
    //checking errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const userId = req.user.id;

    const { email, first_name, last_name, middle_name, phone } = req.body;

    console.log({ email, first_name, last_name, middle_name, phone });

    try {
      await User.updateProfileInfo({
        email,
        first_name,
        last_name,
        middle_name,
        phone,
        user_id: userId,
      });
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        errors: [
          {
            msg: "erreur du serveur",
            errormsg: error.message,
            error: error,
          },
        ],
      });
    }
  }
);

/**
 * @route   Get user/me
 * @access  Private
 * @desc    Load user and auth rules
 * @desc    load the users details and the Financial general report,
 * @desc    once there is no financial general report, the function will create one and assign it to the district,
 */
router.get("/me", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    let user = await User.getUserById(userId);

    if (user.rows.length <= 0)
      return res
        .status(500)
        .json(
          errorFormatter(
            "Échec du chargement de votre profil, réessayez plus tard",
            error
          )
        );

    return res.status(200).json(user.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json(errorFormatter("erreur du serveur", error));
  }
});

module.exports = router;

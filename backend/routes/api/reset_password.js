const express = require("express");
const { v4: uuidv4 } = require("uuid");
// const User = require("../../models/users");
// const ResetPassword = require("../../models/reset_password");
const router = express.Router();
// const EmailTemaplate = require("../../emails/templates");
// const { check, validationResult } = require("express-validator");

// /**
//  * @route   POST plans/savebudget
//  * @desc    Initialize the new plan with the primary information
//  * @access  Private
//  */
// router.post(
//   "/",
//   [check("email", "email is required").not().isEmpty()],
//   async (req, res) => {
//     //checking errors
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         errors: errors.array(),
//       });
//     }

//     const { email } = req.body;

//     try {
//       // check if the email exists
//       let userExists = await User.getUserByEmail(email);

//       if (userExists.rowCount <= 0) {
//         return res.status(400).json({
//           errors: [{ msg: "Email does not found into the system!" }],
//         });
//       }

//       //reset is
//       let reset_id = uuidv4();
//       let user = userExists.rows[0];
//       // remove all previous account reset
//       await ResetPassword.clear_old_reset(user.user_id);

//       // create a reset link
//       let createResetLink = await ResetPassword.create({
//         user_id: user.user_id,
//         reset_id: reset_id,
//         date: new Date(),
//       });

//       if (createResetLink.rowCount <= 0) {
//         return res.status(400).json({
//           errors: [{ msg: "Failed to create a reset link!" }],
//         });
//       }

//       // send email
//       let sendEmail = await Email.send({
//         to: user.email,
//         subject: "Reset Password!",
//         text: "",
//         html: EmailTemaplate.reset_password({
//           reset_link: "/password-reset/" + reset_id,
//           username: user.names,
//         }),
//       });

//       if (sendEmail.status === false) {
//         return res.status(400).json({
//           errors: [{ msg: "Failed to send email, please try again!" }],
//         });
//       }

//       return res.status(200).json({
//         msg: "Reset code sent",
//         email: user.email,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         errors: [
//           {
//             msg: "erreur du serveur",
//             error: error,
//           },
//         ],
//       });
//     }
//   }
// );

module.exports = router;

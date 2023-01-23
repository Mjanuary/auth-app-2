const express = require("express");
const { check, validationResult } = require("express-validator");
const errorFormatter = require("../../controllers/errorFormatter");

// Models
const Roles = require("../../models/roles");
const router = express.Router();

router.post(
  "/",
  [
    check("role_name", "Le nom du rôle est requis").not().isEmpty(),
    check("access", "L'accès est requis").not().isEmpty(),
  ],
  async (req, res) => {
    //checking errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { role_name, access } = req.body;

    try {
      const newRole = {
        role_name,
        access,
      };

      let CreateRole = await Roles.CreateRole(newRole);
      // console.log({ CreateRole });
      return res.status(200).json({
        msg: "nouveau rôle créé avec succès",
        status: CreateRole.rowCount,
      });
    } catch (error) {
      console.log({ ...error });
      return res.status(500).json(errorFormatter("erreur du serveur", error));
    }
  }
);

router.get("/", async (req, res) => {
  try {
    let user = await Roles.getRoles();
    return res.status(200).json(user.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json(errorFormatter("erreur du serveur", error));
  }
});

module.exports = router;

const express = require("express");

const {
   PerkController,
   UserController
  } = require("./controllers");
  
  const router = express.Router();
  
  router.get("/perks", PerkController.browse);

  router.post("/login", UserController.login);
router.get("/me", UserController.me);
  
  module.exports = router;
  
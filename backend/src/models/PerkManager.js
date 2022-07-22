const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "perk";
}

module.exports = UserManager;
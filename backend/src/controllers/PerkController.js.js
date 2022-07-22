const models = require("../models");

class UsersController {
  static browse = async (req, res) => {
    try {
      res.send(await models.Perk.findMany());
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static delete = async (req, res) => {
    try {
      await models.Perk.deleteById(Number(req.params.id));
    } catch (err) {
      console.error(err);
    } finally {
      res.sendStatus(204);
    }
  };
}

module.exports = UsersController;
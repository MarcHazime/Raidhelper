const argon2 = require("argon2");
const Joi = require("joi");

const models = require("../models");

class UserController {
  static me = async (req, res) => {
    const user = req.session.user;

    if (!user) {
      return res.sendStatus(401);
    }

    res.send(user);
  }

  static login = async (req, res) => {
    // Récupérer les données du post (nickname, password)
    const { nickname, password } = req.body;

    // Valider les données avec Joi
    const validation = Joi.object({
      nickname: Joi.string().min(3).max(255).required(),
      password: Joi.string().min(6).max(255).required()
    }).validate({ nickname, password }, { abortEarly: false });

    // Si les données ne sont pas valides, on retourne un code 400 Bad request
    if (validation.error) {
      return res.status(400).send("Nickname or password incorrect");
    }

    // Récupérer l'utilisateur possédant ce nickname
    const [data] = await models.users.findByNickname(nickname);

    // Si l'utilisateur n'existe pas, on retourne un code 401 Unauthorized
    if (data.length === 0) {
      return res.sendStatus(401);
    }

    const user = data[0];

    // On compare si le mot de passe récupéré (depuis les données post) et
    // le même que le mot de passe de l'utilisateur récupéré.
    // Si les mots de passe correspondent, on retourne l'utilisateur mais sans le mot de passe
    if (await argon2.verify(user.password, password)) {
      // On supprime le mot de passe de l'objet utilisateur à renvoyé
      delete user.password;

      // On ajoute le user en session
      req.session.user = user;

      return res.send(user);
    }

    // Si on arrive ici, c'est que les mots de passe ne correspondent
    // pas, donc on renvoie une 401 Unauthorized
    return res.sendStatus(401);
  }
}

module.exports = UserController;

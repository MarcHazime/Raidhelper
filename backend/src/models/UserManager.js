const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  findByNickname(nickname) {
    return this.connection.query(
      `select * from ${UserManager.table} where nickname = ?`,
      [nickname]
    );
  }

  insert(item) {
    return this.connection.query(
      `insert into ${UserManager.table} (nickname, password) values (?, ?)`,
      [item.nickname, item.password]
    );
  }
}

module.exports = UserManager;

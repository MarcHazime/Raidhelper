// eslint-disable-next-line no-unused-vars
const { PrismaClient } = require("@prisma/client");

class AbstractManager {
  /**
   * @param {PrismaClient} connection
   * @param {String} table
   */
  constructor(connection, table) {
    this.connection = connection;
    this.table = table;
  }

  find(options = {}) {
    return this.connection[this.table].findFirst(options);
  }

  findById(id, options = {}) {
    return this.find({ ...options, where: { id } });
  }

  findMany(options = {}) {
    return this.connection[this.table].findMany(options);
  }

  create(data) {
    return this.connection[this.table].create({ data });
  }

  createMany(data) {
    return this.connection[this.table].createMany({ data });
  }

  update(data, options = {}) {
    return this.connection[this.table].update({ ...options, data });
  }

  updateById(id, data, options = {}) {
    return this.update({ ...options, where: { id } }, data);
  }

  updateMany(data, options = {}) {
    return this.update({ ...options, data });
  }

  delete(options = {}) {
    return this.connection[this.table].delete(options);
  }

  deleteById(id) {
    return this.delete({ where: { id } });
  }

  deleteMany(options = {}) {
    return this.connection[this.table].deleteMany(options);
  }
}

module.exports = AbstractManager;

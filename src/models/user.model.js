const db = require("../config/db.config");
const {
  createNewUser: createNewUserQuery,
  findUserByEmail: findUserByEmailQuery,
} = require("../database/queries");
const { logger } = require("../utils/logger");

class User {
  constructor(first_name, last_name, email, password, premium) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.premium = premium;
  }

  static create(newUser, cb) {
    db.query(
      createNewUserQuery,
      [
        newUser.first_name,
        newUser.last_name,
        newUser.email,
        newUser.password,
        newUser.premium,
      ],
      (err, res) => {
        if (err) {
          logger.error(err.message);
          cb(err, null);
          return;
        }
        cb(null, {
          //   id: res.insertId,
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          email: newUser.email,
          premium: newUser.premium,
        });
      }
    );
  }

  static findByEmail(email, cb) {
    db.query(findUserByEmailQuery, email, (err, res) => {
      if (err) {
        logger.error(err.message);
        cb(err, null);
        return;
      }
      if (res.length) {
        cb(null, res[0]);
        return;
      }
      cb({ kind: "not_found" }, null);
    });
  }
}

module.exports = User;

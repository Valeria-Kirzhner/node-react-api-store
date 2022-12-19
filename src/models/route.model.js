const db = require("../config/db.config");
const {
  createNewRoute: createNewRouteQuery,
  getUserRoutes: getUserRoutesQuery,
} = require("../database/queries");
const { logger } = require("../utils/logger");

class Route {
  constructor(path, description, response, related_to) {
    this.path = path;
    this.description = description;
    this.response = response;
    this.related_to = related_to;
  }

  static create(newRoute, cb) {
    db.query(
      createNewRouteQuery,
      [
        newRoute.path,
        newRoute.description,
        newRoute.response,
        newRoute.related_to,
      ],
      (err, res) => {
        if (err) {
          logger.error(err.message);
          cb(err, null);
          return;
        }
        cb(null, {
          //   id: res.insertId,
          path: newRoute.path,
          description: newRoute.description,
          response: newRoute.response,
          related_to: newRoute.related_to,
        });
      }
    );
  }
  static getRoutes(userId, cb) {
    db.query(getUserRoutesQuery, userId, (err, res) => {
      if (err) {
        logger.error(err.message);
        cb(err, null);
        return;
      }
      if (res.length) {
        console.log(res);
        cb(null, res);
        return;
      }
      cb({ kind: "not_found" }, null);
    });
  }
}

module.exports = Route;

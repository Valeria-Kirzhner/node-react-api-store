const Route = require("../models/route.model");

exports.createRoute = (req, res) => {
  const { path, description, response } = req.body;
  const related_to = req.user.id;

  const route = new Route(
    path.trim(),
    description.trim(),
    response.trim(),
    related_to
  );

  Route.create(route, (err, data) => {
    if (err) {
      res.status(500).send({
        status: "error",
        message: err.message,
      });
    } else {
      res.status(201).send({
        status: "success",
        data: {
          path,
          description,
          response,
        },
      });
    }
  });
};
exports.getUserRoutes = (req, res) => {
  const related_to = req.user.id;

  Route.getRoutes(related_to, (err, data) => {
    if (err) {
      res.status(500).send({
        status: "error",
        message: err.message,
      });
    } else {
      res.status(201).send({
        status: "success",
        data: data,
      });
    }
  });
};

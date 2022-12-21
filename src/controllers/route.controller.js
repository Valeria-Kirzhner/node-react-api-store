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
exports.editRoute = (req, res) => {
  const { path, description, response } = req.body;
  const related_to = req.user.id;
  const routeId = req.params.id;
  Route.editRoute(
    [path, description, response, routeId, related_to],
    (err, data) => {
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
    }
  );
};
exports.deleteRoute = (req, res) => {
  const related_to = req.user.id;
  const routeId = req.params.id;

  Route.delete(routeId, related_to, (err, data) => {
    if (err) {
      res.status(500).send({
        status: "error",
        message: err.message,
      });
    } else {
      res.status(201).send({
        status: "success",
      });
    }
  });
};
exports.getRoute = (req, res) => {
  const fullPath = req.protocol + "://" + "localhost" + req.originalUrl;

  Route.get(fullPath, async (err, data) => {
    if (err) {
      res.status(500).send({
        status: "error while fetching response",
        message: err.message,
      });
    } else {
      await updateVisite(req);
      res.status(201).send({
        status: "success",
        data: data,
      });
    }
  });
};
const updateVisite = (req) => {
  const fullPath = req.protocol + "://" + "localhost" + req.originalUrl;
  Route.updateVisited(fullPath, (err, data) => {
    if (err) {
      res.status(500).send({
        status: "error while updating visite",
        message: err.message,
      });
    }
  });
};

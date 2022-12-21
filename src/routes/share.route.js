const router = require("express").Router();
const { asyncHandler } = require("../middlewares/asyncHandler");
const { create: routeValidator } = require("../validators/route");
const routeController = require("../controllers/route.controller");
const checkToken = require("../middlewares/checkToken");

router
  .route("/create")
  .post(routeValidator, checkToken, asyncHandler(routeController.createRoute));

router
  .route("/my-routes")
  .get(checkToken, asyncHandler(routeController.getUserRoutes));

router
  .route("/edit/:id")
  .put(routeValidator, checkToken, asyncHandler(routeController.editRoute));

router
  .route("/delete/:id")
  .delete(checkToken, asyncHandler(routeController.deleteRoute));

router.route("/:name/:path").get(asyncHandler(routeController.getRoute));

module.exports = router;

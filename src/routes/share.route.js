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

router.route("/get:id").get(asyncHandler());

router.route("/update:id").patch(routeValidator, asyncHandler());

router.route("/delete:id").delete(asyncHandler());

module.exports = router;

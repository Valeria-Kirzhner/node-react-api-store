const router = require("express").Router();
const { asyncHandler } = require("../middlewares/asyncHandler");
const { create: routeValidator } = require("../validators/route");
const routeController = require("../controllers/route.controller");

router
  .route("/create")
  .post(routeValidator, asyncHandler(routeController.createRoute));

router.route("/get").get(asyncHandler());

router.route("/get:id").get(asyncHandler());

router.route("/update:id").patch(routeValidator, asyncHandler());

router.route("/delete:id").delete(asyncHandler());

module.exports = router;

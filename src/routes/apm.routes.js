const { Router } = require("express");
const { ApmController } = require("../controllers");
const { CacheMiddleware } = require("../middlewares");
const { CacheTimeHelper } = require("../helpers");

const router = new Router();
const controller = new ApmController();

router.get(
  "/",
  CacheMiddleware(CacheTimeHelper.TEN_SECONDS),
  controller.getAll
);
router.get("/:id", controller.get);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

router.get("/find/:command", controller.findByCommand);

module.exports = router;

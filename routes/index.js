const { Router } = require("express");
const indexRouter = Router();
const appController = require("../controllers/appController");
indexRouter.get("/", appController.indexRouterGet);

indexRouter.post("/new", appController.indexRouterPost);

module.exports = indexRouter;

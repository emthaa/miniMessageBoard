const { Router } = require("express");
const newRouter = Router();
const appController = require("../controllers/appController")
newRouter.get("/", appController.newRouterGet);

module.exports = newRouter;

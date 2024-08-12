const { Router } = require("express");
const openRouter = Router();
const appController = require("../controllers/appController");

openRouter.get("/messages/:id", appController.openRouterGet);

module.exports = openRouter;

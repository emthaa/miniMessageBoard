const { Router } = require("express");
const openRouter = Router();
const messages = require("../messages");

openRouter.get("/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = messages.find(message => message.id === messageId);

  if (message) {
    res.render("open", { message });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = openRouter;

const { Router } = require("express");
const openRouter = require("./open");
const indexRouter = Router();
const messages = require("../messages");

indexRouter.get("/",(req,res) =>{
    res.render("index", {messages});
})

indexRouter.post('/new', function(req, res) {
  const messageText = req.body.messageText //extracting form data
  const messageUser = req.body.messageUser

  messages.push({
    id: messages.length + 1,
    text: messageText,
    user: messageUser,
    added: new Date()
  });
  res.redirect("/")
});

openRouter.get("/messages/:id",(req,res) =>{
  res.render("open", {messages});
})


module.exports = indexRouter
const db = require("../db/queries");

async function indexRouterGet(req, res) {
  let fetchedUsers;

  await db
    .getAllUsersInfo()
    .then((users) => (fetchedUsers = users))
    .catch((err) => console.error(err));

  res.render("index", { fetchedUsers });
}

async function indexRouterPost(req, res) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  const user = {
    message: messageText,
    username: messageUser,
    date: new Date(),
  };

  try {
    await db.insertUser(user);
    res.redirect("/");
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function openRouterGet(req, res) {
  const id = req.params.id;
  console.log(id);

  try {
    const user = await db.getUserInfo(id);
    res.render("open", { user });
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function newRouterGet(req, res) {
  res.render("form");
}

module.exports = {
  indexRouterGet,
  indexRouterPost,
  openRouterGet,
  newRouterGet,
};

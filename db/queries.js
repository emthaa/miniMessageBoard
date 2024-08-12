const pool = require("./pool");

async function getAllUsersInfo() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getUserInfo(userId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    userId,
  ]);
  return rows[0];
}

async function insertUser(user) {
  console.log(user);
  await pool.query(
    "INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)",
    [user.username, user.message, user.date]
  );
}

module.exports = {
  getAllUsersInfo,
  getUserInfo,
  insertUser,
};

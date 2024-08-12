#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  message TEXT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message, date) 
VALUES
  ('Amando', 'Hi there!', '${new Date().toISOString()}'),
  ('Charles', 'Hello World!', '${new Date().toISOString()}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgres://koyeb-adm:${process.env.DATABASE_PASSWORD}@ep-red-sun-a4cnuv4h.us-east-1.pg.koyeb.app/koyebdb`,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

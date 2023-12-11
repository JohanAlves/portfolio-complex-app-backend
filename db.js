const https = require("https");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.CONNECTIONSTRING);

async function start() {
  await client.connect();
  module.exports = client;
  const app = require("./app");

  /*   https
    .createServer(
      // Provide the private and public key to the server by reading each
      // file's content with the readFileSync() method.
      {
        key: fs.readFileSync(
          "/etc/letsencrypt/live/complexapp-api.johanalves.com/privkey.pem"
        ),
        cert: fs.readFileSync(
          "/etc/letsencrypt/live/complex-apiapp.johanalves.com/cert.pem"
        ),
      },
      app
    )
    .listen(process.env.PORT); */

  app.listen(process.env.PORT);
}

start();

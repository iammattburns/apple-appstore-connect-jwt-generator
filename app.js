require("dotenv").config();

const moment = require("moment");
const jwt = require("jsonwebtoken");
const chalk = require("chalk");
const fs = require("fs");

const privateKey = fs.readFileSync(process.env.PRIVATE_KEY_PATH, "utf8");
const now = moment().utc();

const header = {
  alg: "ES256",
  kid: process.env.PRIVATE_KEY_ID,
  typ: "JWT",
};

// generate an expiration time (20 minutes from now)
const expiration = now.add(20, "minutes").unix();

// create the payload
const payload = {
  iss: process.env.ISSUER_ID,
  iat: now.unix(),
  exp: expiration,
  aud: "appstoreconnect-v1",
};

// sign the token with the iss, time, key, and bid with the correct algorithm
const generatedJwt = jwt.sign(payload, privateKey, {
  algorithm: "ES256",
  header,
});

console.log(chalk.green("------------------------------"));
console.log(chalk.green("🚀 App Store Connect JWT Token"));
console.log(chalk.green("------------------------------"));
console.log(chalk.yellow(generatedJwt));
console.log(chalk.green("------------- End ------------"));

require("dotenv").config();
const express = require("express");
const app = express();
const router = express.Router();
const isProduction = process.env.NODE_ENV == "production" ? true : false;

// APP
app.disable("x-powered-by");
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));


// Error Handler
app.use(function (err, req, res, next) {
  // log file
  console.log(req.method + " " + req.url + " - " + err.stack);
  // default to 500 server error
  return res.status(500).json({ status: 500, message: err.message });
});

module.exports = app;
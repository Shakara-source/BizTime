/** BizTime express application. */
const express = require("express");
const app = express();
const ExpressError = require("./expressError")

// JSON Parsing
app.use(express.json());

const cRoutes = require("./routes/companies");
const iRoutes = require("./routes/invoices");
app.use("/companies", cRoutes);
app.use("/invoices", iRoutes);

/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404)

  // pass err to the next middleware
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});


module.exports = app;

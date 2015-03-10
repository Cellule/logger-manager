"use strict";

var _ = require("lodash");

var manager = require("./manager");

var config = require("./config");

// Attach all exported members to the default exported function
_(manager).keys().filter(function (member) {
  return member !== "getLogger";
}).forEach(function (member) {
  manager.getLogger[member] = manager[member];
});

manager.getLogger.setDev = config.setDev;
module.exports = manager.getLogger;
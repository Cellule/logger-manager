"use strict";

exports.getNow = getNow;
var printf = require("printf");

var config = require("./config");

function localISOString(d) {
  return printf("%d-%02d-%02d %02d:%02d:%02d", d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
}

function getNow() {
  var now = new Date();
  var nowISOString;
  if (config.isDev) {
    // ISO-like date, but do as if current timezone was UTC.
    nowISOString = localISOString(now);
  } else {
    // Return UTC date and time unless in development.
    nowISOString = now.toISOString().replace(/T/, " ").replace(/\..+/, "");
  }
  return nowISOString;
}
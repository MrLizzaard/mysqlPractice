const express = require("express");
const mysql = require("mysql");
const { faker } = require("@faker-js/faker");
const conn = require("./config");

const connection = mysql.createConnection(conn);

var q = "SELECT CURDATE() AS 'date'";
connection.query(q, (err, res, fields) => {
  if (err) throw err;
  console.log(res[0].date.toString());
});

connection.end();

const express = require("express");
const mysql = require("mysql");
const { faker } = require("@faker-js/faker");
const conn = require("./config");

const connection = mysql.createConnection(conn);

const data = [];

for (let i = 0; i < 500; i++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

connection.query("INSERT INTO users (email, created_at) VALUES ?", [data], (err, res) => {
  if (err) throw err;
  console.log(res);
});

connection.end();

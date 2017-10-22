'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const reUser = /\((\w+;(?:.)+\d)\)/;
  const headers = req.headers;
  const software = reUser.exec(headers['user-agent'])[1];
  const ip = headers['x-forwarded-for'].split(',')[0];
  const language = headers['accept-language'].split(',')[0]; 
  res.send({ipaddress: ip, language: language, software: software});
});

app.listen(process.env.PORT);
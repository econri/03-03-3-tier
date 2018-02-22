'use strict';

const express = require('express');
const path = require('path');

const HOST = 'localhost';
const PORT = '3000';
const CLIENT_FILE_PATH = path.join(__dirname, './client.html');

const app = express();
const dal = require('./dal');

app.get('/users', (req, res) => {
  dal.Users
    .find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.error(err);
      res
        .status(500)
        .end('Internal server error');
    });
});

app.listen({ port: PORT, host: HOST }, () => {
  console.log('Server is listening at http://' + HOST + ':' + PORT);
});
'use strict';

const Promise = require('bluebird');
const dal = require('./dal');

const dummyUsers = [
  { name: 'John', sex: 'male' },
  { name: 'Jane', sex: 'female' }
];

Promise
  .map(dummyUsers, user => dal.Users.create(user))
  .then(() => {
    console.log('Users created');
    process.exit(0);
  })
  .catch(err => {
    console.error('An error occured', err);
    process.exit(1);
  });
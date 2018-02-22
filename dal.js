'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const Users = mongoose.model('Users', {
  name: String,
  sex: {
    type: String,
    enum: ['male', 'female']
  }
});

module.exports = {
  Users
};
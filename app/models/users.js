const mongoose = require('mongoose');
const Promise = require('bluebird');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true
  }
});

Promise.promisifyAll(mongoose.Model);
Promise.promisifyAll(mongoose.Model.prototype);
Promise.promisifyAll(mongoose.Query);
Promise.promisifyAll(mongoose.Query.prototype);

module.exports = mongoose.model('User', UserSchema);

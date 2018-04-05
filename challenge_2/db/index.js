const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/customers');

const Customer = mongoose.Schema({
  first: String,
  last: String,
  email: String,
  password: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  card: String,
  expiry: String,
  cvv: String,
  billingzip: String,
});

const Customers = mongoose.model('Customers', Customer);

function insertOne(entry, callback) {
  Customers.create(entry, callback);
}

exports.insert = insertOne;

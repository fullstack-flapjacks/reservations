const mongoose = require('mongoose'); // include DB object
const seedData = require('dataGenerator');

mongoose.connect('mongodb://localhost/restaurants');

const availabilitySchema = mongoose.Schema({
  id: Number,
  availability: [{
    day: Number,
    time: Number,
  }],
});

let Availability = mongoose.model('Availability', availabilitySchema);

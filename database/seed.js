const mongoose = require('mongoose'); // include DB object
const seed = require('./dataGenerator');

mongoose.connect('mongodb://localhost/restaurants');

const availabilitySchema = mongoose.Schema({
  id: {type:Number, unique: true},
  availability: [{
    day: Number,
    hour: Number,
    minute: Number
  }],
});

const bookingsSchema = mongoose.Schema({
  id: {type:Number, unique: true},
  bookings: [{
    day: Number,
    bookings_count: Number
  }],
});

let Availability = mongoose.model('Reservations', availabilitySchema);
let Bookings = mongoose.model('Bookings', bookingsSchema);

//clear the collections / table

// Availability.remove({}, function(err) { 
//    console.log('Availability collection removed') 
// });

// Bookings.remove({}, function(err) { 
//    console.log('Availability collection removed');
// });


Availability.create(seed.availabilityData, (err, entries)=>{
  if (err){
    console.log('Error seeding restaurant availbility data', err);
    return;
  }
  console.log('Successfully seeded restaurant availability data', entries);

});

Bookings.create(seed.bookingsData, (err, entries)=>{
  if (err){
    console.log('Error seeding bookings count data', err);
    return;
  }
  console.log('Successfully seeded bookings count data', entries);

});





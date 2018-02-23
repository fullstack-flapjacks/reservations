const mongoose = require('mongoose');
const models = require('../../database/dbModels');

mongoose.connect('mongodb://localhost/restaurants');

let Availability = models.availability;
let Bookings = models.bookings;

const reservations = function reservations(id, req, res){

  Availability.find({id:id}, (err, result) => {
    if (err){
      console.log('Error retrieving availbility times', err);
      res.status(500).send(err);
      return;
    }

    res.send(result[0].availability);
  });
}

const bookings = function bookings(){
  
}

module.exports.times = reservations;
module.exports.bookingCount = bookings;
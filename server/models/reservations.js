const mongoose = require('mongoose');
const models = require('../../database/dbModels');

mongoose.connect('mongodb://localhost/restaurants');

//searches a DB Model for particular id, and invokes callback on it
const findInDb = function findInDb(model, id, callback){
  model.find({id:id}, (err, result)=>{
    if (err){
      console.log('Error retrieving data', err);
      res.status(500).send(err);
      return;
    }
    callback(result[0]);
  });
}

//Query db for specific restaurant availability times
const reservations = function reservations(id, callback){
  findInDb(models.availability, id, callback);
}

//Query db for specific restaurant booking times
const bookings = function bookings(id, callback){
  findInDb(models.bookings, id, callback);
}

module.exports.availability = reservations;
module.exports.bookings = bookings;
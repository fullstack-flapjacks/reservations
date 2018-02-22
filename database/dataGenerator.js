/*
Data Generator File
This js file initializes random restaurant availability data that will be seeded into the DB
*/

var data = [];

//generate a random number between two values inclusive
var randomInt = function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


var generateRandomTimeSlots = function generateRandomTimeSlots(restaurant, day, numSlots) {
  for (var i = 0; i < numSlots; i++) {
    restaurant.availability.push({
      day: day,
      time: randomInt(3, 10)
    });
  }
}

var generateRandomAvailabilityData = function generateRandomAvailabilityData() {
  //initialize 200 restaurant ids
  for (var i = 0; i < 200; i++) {

    var restaurant = {
      id: i,
      availability: []
    }
    //Generate Time Slots for each of 30 days
    for (var day = 1; day <= 30; day++) {
      generateRandomTimeSlots(restaurant, day, randomInt(0,5)); //Randomize number of available slots per day
    }
    data.push(restaurant);
  }
}

generateRandomAvailabilityData();

console.log(data[1]);

module.exports = data;
/*
Data Generator File
This js file initializes random restaurant availability data that will be seeded into the DB
*/

var data = [];

//generate a random number between two values inclusive
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


//generates random minutes between 0 - 45
var randomMinutes = function randomMinutes() {
  var random = randomInt(0, 3);
  var minutes = {
    0: 0,
    1: 15,
    2: 30,
    3: 45
  }
  return minutes[random];
}

var generateRandomTimeSlots = function generateRandomTimeSlots(restaurant, day, numSlots) {
  for (var i = 0; i < numSlots; i++) {
    restaurant.availability.push({
      day: day,
      hour: randomInt(15, 22),
      minute: randomMinutes()
    });
  }
}

var generateRandomAvailabilityData = function generateRandomAvailabilityData() {
  //initialize 200 restaurant ids
  for (var i = 0; i < 200; i++) {
    //instantiate empty restaurant object
    var restaurant = {
      id: i,
      availability: []
    }
    //Generate Time Slots for each of 30 days
    for (var day = 1; day <= 30; day++) {
      generateRandomTimeSlots(restaurant, day, randomInt(0, 7)); //Randomize number of available slots per day
    }
    data.push(restaurant); //push restaurant object into raw data array
  }
}

generateRandomAvailabilityData();

console.log(data[1]);

module.exports = data;
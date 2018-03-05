const express = require('express');
const app = express();
const router = express.Router();
const reservations = require('./models/reservations');

//Route requests for specific restaurant availability
router.get('/:id/reservations', (req,res)=>{

  reservations.availability(req.params.id, res, (data)=>{
    //send back table availability times
    res.send(data.availability); 
  });
});

//Route requests for specific restaurant bookings count
router.get('/:id/bookings', (req,res)=>{
  reservations.bookings(req.params.id, res, (data)=>{
    //send back booking times
    res.send(data.bookings);
  });
});


app.get('*', (req,res)=>{
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});



module.exports = router;
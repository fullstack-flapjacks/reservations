const express = require('express');
const app = express();
const router = express.Router();
const reservations = require('./models/reservations');

router.get('/:id/reservations', (req,res)=>{
  reservations.times(req.params.id, req, res);
});

router.get('/:id/bookings', (req,res)=>{
res.status(200).send('yo you are in bookings')
});


app.get('*', (req,res)=>{
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});



module.exports = router;
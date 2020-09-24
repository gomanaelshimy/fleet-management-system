const Trip = require("../Models/Trip");
const Seat = require("../Models/Seat");
const express = require("express");
const jwt = require("jsonwebtoken");

const authenticateUser = require("../middleware/authenticate");

const router = express.Router();


router.post("/", authenticateUser, async (req, res) => {
    const what = await jwt.decode(req.headers.authorization.split(" ")[1]);
  const user = await User.findOne({ username: what.username });
  try{
  if(user.userType != "Admin"){
    return res.json({msg: "You cannot update another user's info"})
  }else{
        const trip = await new Trip({
            subTrips: req.body.subTrips,
            BusNumber: req.body.BusNumber,
            departureTime: req.body.departureTime,
            date: req.body.date,
            bookings: req.body.bookings,
            fromTo: req.body.fromTo,
        })
        trip.save();
        return res.json({ data: trip });}
        
} catch (error) {
    console.log(error);
  }
});




  router.post("/availbleseats", async (req, res) => {
    try{ 
   const trip= await Trip.findOne( {fromTo: req.body.fromTo});
   if(trip== null){
    res.send("no such trip availble")

   }else{
   const spaces= await Seat.find({ Reserved: false, BusNumber: trip.BusNumber});
    if(spaces != null){
     return res.send( {spaces, trip});
   }else{
       //console.log("seats")
      return res.send("all seats are booked")
   }
}
} catch (error) {
    console.log(error);
  }
   
  })
  router.put("/", async (req, res) => {
  const trip= await Trip.findById( req.body.tripID);
  try{
  if( req.body.subTrip.length != 0 ){
    var i;
  for ( i=0 ; i <req.body.subTrip.length;i++){
  trip.subTrips.push(req.body.subTrip[i]) ;
  }
}else{
  res.send(" no input subtrips ")
}
  trip.save();
  res.send(trip);
}catch (error){
  console.log(error);
}
  })

  module.exports= router;
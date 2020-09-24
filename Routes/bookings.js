const Booking = require("../Models/Booking");
const Seat = require("../Models/Seat");
const Trip= require("../Models/Trip");
const express = require("express");
const { Mongoose } = require("mongoose");
//const jwt = require("jsonwebtoken");
//const authenticateUser = require("../middleware/authenticate");

const router = express.Router();

router.post("/", async (req, res) => {
 try{
        
        const seat= await Seat.findById(req.body.seatID);
        const trip= await Trip.findById( req.body.tripID);

if(trip == null){
 return res.send (" the trip Id is wrong");
}else{    

if (trip.subTrips.length ==0){
    if(trip.bookings == 12){
        return res.send('there is no space on this trip');
     }
    if (seat.Reserved === true){
        return res.send('this seat is reserved');
    }else{
    
    console.log(seat);
        const booking = await new Booking({
            tripID: req.body.tripID,
            accountID: req.body.accountID,
            seatID: req.body.seatID,
            price: req.body.price
    })
    trip.bookings +=1;
    seat.Reserved = true;
    booking.save();
    trip.save();
    seat.save();

    return res.json({ data: booking });
    }
}else{
    var i;
    var nospace=false;
    for ( i=0; i<trip.subTrips.length;i++){
        const id= trip.subTrips[i];
       const subtrip= await Trip.findById(id);
       if(subtrip.bookings ==12){
        nospace = true;
       }else{
        nospace =false;
       }
    }if(trip.bookings == 12 || nospace == true ){
        return res.send('there is no space on this trip');
    }else if (seat.Reserved==true){
        return res.send('this seat is reserved');
    }else{
    var i;
    for ( i=0; i<trip.subTrips.length;i++){
      const subtrip= await Trip.findById( trip.subTrips[i]);
      subtrip.bookings +=1;
      subtrip.save();
    }

}
const booking = await new Booking({
    tripID: req.body.tripID,
    accountID: req.body.accountID,
    seatID: req.body.seatID,
    price: req.body.price
})
trip.bookings += 1;
seat.Reserved= true;
booking.save();
trip.save();
seat.save();
return res.json({ data: booking });

}        
        }
    }catch (error){
        console.log(error);

    };
        
        

});





  module.exports= router;
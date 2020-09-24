const express = require("express");

const Seat = require("../Models/Seat");
const router = express.Router();

router.createseats = () => {
  var i;
  var j;
  for (i=1; i<=10; i++){
    for (j=0; j<12; j++){
      const seat =  new Seat({
        BusNumber: i,
        Reserved: false,
        
    })
    seat.save();
    }
  }
}

/*router.get("/", async (req, res) => {
    const seat = await Seat.findOne({ Reserved: false, BusNumber: request.body.BusNumber});
    res( seat.id );
  })

  router.get("/all", async (req, res) => {
    const seats = await Seat.find({ Reserved: false, BusNumber: request.body.BusNumber});
    res.json( { data: seats } );
  })*/

module.exports= router;
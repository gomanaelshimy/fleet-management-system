const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const SeatSchema = new Schema({
    BusNumber: {  type: Number , required: true },
   Reserved: { type: Boolean, required: true },

  
});


module.exports = Seat = mongoose.model("seats", SeatSchema);
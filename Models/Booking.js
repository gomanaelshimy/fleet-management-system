const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const BookingSchema = new Schema({
  tripID: {  type: String , required: true },
  accountID: { type: String, required: true },
  seatID:{ type: String, required: true },
  price: { type: String, required: true },
  
});


module.exports = Booking = mongoose.model("Bookings", BookingSchema);

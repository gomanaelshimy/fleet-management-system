const { array } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const TripSchema = new Schema({
  subTrips: [String],
  BusNumber: { type: Number, required: true},
  departureTime:{ type: String, required: true},
  date: { type: String, date: true},
  bookings:{ type: Number},
  fromTo: {type: String, required: true}
  
});


module.exports = Trip = mongoose.model("trips", TripSchema);

const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  username:{ type: String, required: true, unique: true},
  password: { type: String, required: true},
  userType:{ type: String, enum:["Admin" , "User"], required: true},
  
});


module.exports = User = mongoose.model("users", UserSchema);

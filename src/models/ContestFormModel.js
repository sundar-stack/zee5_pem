const mongoose = require("mongoose");

const ContestFormSchema = new mongoose.Schema({
  userName: String,
  spouseName: String,
  dateOfWedding: Date,
  email: String,
  phoneNumber: Number,
  city: String,
  description: String,
  youtubeLink: String,
  tncAcceptance: Boolean,
});

module.exports = mongoose.model("contestForm", ContestFormSchema);

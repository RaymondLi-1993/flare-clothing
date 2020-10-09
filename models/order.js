const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  _id: String,
  email: String,
  name: String,
  address: String,
  state: String,
  zip: Number,
  total: Number,
  cart: Array,
  _user: { type: String } || { type: Schema.Types.ObjectId, ref: `User` },
  date: Date,
});

mongoose.model("orders", orderSchema);

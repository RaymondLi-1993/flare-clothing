const mongoose = require("mongoose");
const shortId = require("shortid");
const { Schema } = mongoose;

const orderSchema = new Schema({
  _id: {
    type: String,
    default: shortId.generate(),
  },
  Email: String,
  Name: String,
  Address: String,
  total: Number,
  cart: Array,
  _user: { type: Schema.Types.ObjectId, ref: `User` },
  date: Date,
});

mongoose.model("orders", orderSchema);

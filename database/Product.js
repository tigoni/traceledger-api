const { randomUUID } = require("crypto");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  uuid: {
    type: String,
    default: () => randomUUID(),
  },
  productName: {
    type: String,
    default: "",
  },
  weight: {
    type: String,
    default: "",
  },
  harvestDate: {
    type: Object,
    default: {},
  },
  collectionDate: {
    type: Object,
    default: {},
  },
  grade: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    default: "",
  },
  farm: {
    type: String,
    default: "",
  },
  rating: {
    type: String,
    default: "",
  },
  comments: {
    type: String,
    default: "",
  },
  collectionDate: {
    type: Date,
    default: new Date(),
  },
  harvestDate: {
    type: Date,
    default: new Date(),
  },
  nftTxIdUrl: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("product", ProductSchema);

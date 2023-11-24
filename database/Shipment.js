const { randomUUID } = require("crypto");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dispatchSchema = new Schema({
  date: {type: Date, default: Date.now},
  dispatchId: {
    type: String,
    default: () => randomUUID(),
  },
  productName: {
    type: Schema.Types.ObjectId,
    ref: 'Produce',
  },
  destination: {
    type: String,
    default: "",
  },
  packedOn: {
    type: Date,
    default: Date.now,
  },
  packedBy: {
    type: String,
    default: "",
  },
  status: {type: Schema.Types.ObjectId, ref: 'Status'},
  dispatchNft: {
    required: true,
    type: String,
  },
},
  {timestamps: true},
);
module.exports = mongoose.model("Dispatch", dispatchSchema);

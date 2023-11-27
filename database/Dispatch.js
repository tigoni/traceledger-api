const { randomUUID } = require("crypto");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dispatchSchema = new Schema({
  date: { type: Date, default: Date.now },
  dispatchId: {
    type: String,
    default: () => randomUUID(),
  },
  produceItems: {
    type: Schema.Types.ObjectId,
    ref: 'Produce',
  },
  packWeight: {
    type: Number,
    default: 1,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
  packedOn: {
    type: Date,
    default: Date.now,
  },
  packedBy: {
    type: String,
    default: "",
  },
  dispatchStatus: { type: Schema.Types.ObjectId, ref: 'Status' },
  dispatchNft: {
    // required: true,
    type: String,
  },
},
  { timestamps: true },
);
module.exports = mongoose.model("Dispatch", dispatchSchema);

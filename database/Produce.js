const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produceSchema = new Schema({
    date: { type: Date, default: Date.now },
    produce: {
        type: Schema.Types.ObjectId,
        ref: 'Crop',
    },
    weight: {
        type: String,
        default: "",
    },
    harvestedOn: {
        type: Object,
        default: {},
    },
    collectedOn: {
        type: Object,
        default: {},
    },
    harvestGrade: {
        type: String,
        default: "",
    },
    pesticidesUsed: {
        type: Array,
        default: [],
    },
    seedBrand: {
        type: String,
        default: '',
    },
    fertlizersApplied: {
        type: Array,
        default: [],
    },

    comments: {
        type: String,
        default: "",
    },
    nftTxIdUrl: {
        required: true,
        type: String,
    },
});
module.exports = mongoose.model("Produce", produceSchema);

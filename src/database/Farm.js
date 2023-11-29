const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmSchema = new Schema({

    /**Farm details */
    farm: {
        type: String,
        default: "",
    },
    class: {
        type: String,
        default: "",
    },
    location: {
        type: String,
        default: '',
    },
    contractValidTo: { type: Date, default: Date.parse('2027-01-01') }
});


module.exports = mongoose.model("Farm", farmSchema);
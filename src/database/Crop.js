const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cropSchema = new Schema({

    name: {
        type: String,
        default: "",
    },
    class: {
        type: String,
        default: "",
    },
    });


const Crop = mongoose.model("Crop", cropSchema);
module.exports = Crop;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    statusName: {
        type: String,
        default: "In-Store",
    },
});

module.exports = mongoose.model("Status", statusSchema);
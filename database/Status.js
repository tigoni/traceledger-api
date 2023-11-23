const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    name: {
        type: String,
        default: "In-Store",
    },
});
const Status = mongoose.model("Status", statusSchema);
module.exports = Status;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerName: {
        type: String,
        default: "",
    },
    location: {
        type: String,
        default: "",
    }
});
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
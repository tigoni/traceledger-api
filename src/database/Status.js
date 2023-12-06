const mongoose = require('mongoose');

const { Schema } = mongoose;

const statusSchema = new Schema({
  statusName: {
    type: String,
    default: 'In-Store',
  },
});

module.exports = mongoose.model('Status', statusSchema);

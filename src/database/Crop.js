const mongoose = require('mongoose');

const { Schema } = mongoose;

const cropSchema = new Schema({

  name: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
});

const Crop = mongoose.model('Crop', cropSchema);
module.exports = Crop;

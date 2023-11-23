const Crop = require("../database/Crop");

const listAll = async () => { 
return await Crop.find({});
}

module.exports = { listAll };

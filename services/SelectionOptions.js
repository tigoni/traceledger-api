const Crop = require("../database/Crop");
const Produce = require("../database/Produce");
const Farm = require("../database/Farm");

const listAllCrops = async () => { 
return await Crop.find({});
}

const listAllFarms = async () => { 
return await Farm.find({});
}

const listAllProduce = async () => { 
return await Produce.find({}).populate('name').exec();
}



module.exports = { listAllCrops, listAllFarms, listAllProduce };

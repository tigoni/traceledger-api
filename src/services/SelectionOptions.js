const Crop = require('../database/Crop');
const Produce = require('../database/Produce');
const Farm = require('../database/Farm');
const Customer = require('../database/Customer');

const listAllCrops = async () => Crop.find({});

const listAllFarms = async () => Farm.find({});

const listAllProduce = async () => Produce.find({}).populate('name').exec();

const listAllCustomers = async () => Customer.find({});

module.exports = {
  listAllCrops, listAllFarms, listAllProduce, listAllCustomers,
};

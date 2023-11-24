const express = require("express");
const { ADD_PRODUCE, GET_CROPS, GET_FARM, GET_PRODUCE, GET_CUSTOMERS } = require("../../constants/api-strings");
const { addProduce, listProduce } = require("../../controllers/Produce");
const {getCrops,getFarm, getProduce, getCustomers } = require('../../controllers/SelectionOptions');

const v1Router = express.Router();

v1Router.post(ADD_PRODUCE, addProduce);
v1Router.get(GET_CROPS, getCrops);
v1Router.get(GET_FARM, getFarm);
v1Router.get(GET_PRODUCE, getProduce);
v1Router.get(GET_CUSTOMERS, getCustomers);

module.exports = v1Router;

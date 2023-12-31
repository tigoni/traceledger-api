const express = require('express');
const {
  ADD_PRODUCE, GET_CROPS, GET_FARM, GET_PRODUCE, GET_CUSTOMERS, ADD_DISPATCH, GET_DISPATCH_ITEMS,
} = require('../../src/constants/ApiStrings');
const { addProduce } = require('../../src/controllers/Produce');
const { addDispatch, getDispatchItems } = require('../../src/controllers/Dispatch');
const {
  getCrops, getFarm, getProduce, getCustomers,
} = require('../../src/controllers/SelectionOptions');

const v1Router = express.Router();

v1Router.post(ADD_PRODUCE, addProduce);
v1Router.get(GET_CROPS, getCrops);
v1Router.get(GET_FARM, getFarm);
v1Router.get(GET_PRODUCE, getProduce);
v1Router.get(GET_CUSTOMERS, getCustomers);
v1Router.get(GET_DISPATCH_ITEMS, getDispatchItems);
v1Router.post(ADD_DISPATCH, addDispatch);

module.exports = v1Router;

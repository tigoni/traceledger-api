const express = require("express");
const { ADD_PRODUCE, GET_CROPS, GET_FARM, GET_PRODUCE } = require("../../constants/api-strings");
const { addProduce, listProduce } = require("../../controllers/Produce");
const {getCrops,getFarm, getProduce } = require('../../controllers/SelectionOptions');

const v1Router = express.Router();

v1Router.post(ADD_PRODUCE, addProduce);
v1Router.get(GET_CROPS, getCrops);
v1Router.get(GET_FARM, getFarm);
v1Router.get(GET_PRODUCE, getProduce);
// v1Router.get(LIST_PRODUCE, listProduce);
// v1Router.get(GET_ASSETS, getAssets);
// v1Router.get(SAVE_PRODUCT, saveProduct);
// v1Router.post(PURCHASE, buy);
// v1Router.post(TRANSFER, transferAssets);
// v1Router.post(TX_COMPLETE, confirmTxComplete);
// v1Router.get(TRANSACTIONS_LIST, getTransactionsList);

module.exports = v1Router;

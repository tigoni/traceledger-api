const express = require("express");
const {
  PRODUCT_SAVE,
} = require("../../constants/api-strings");
const {
save,
} = require("../../controllers/Product");

const v1Router = express.Router();

v1Router.post(PRODUCT_SAVE, save);
// v1Router.post(REGISTER, register);
// v1Router.get(GET_ASSETS, getAssets);
// v1Router.get(SAVE_PRODUCT, saveProduct);
// v1Router.post(PURCHASE, buy);
// v1Router.post(TRANSFER, transferAssets);
// v1Router.post(TX_COMPLETE, confirmTxComplete);
// v1Router.get(TRANSACTIONS_LIST, getTransactionsList);

module.exports = v1Router;

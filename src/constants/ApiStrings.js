// root path
const API_V1 = '/trace/api/v1';

// app routes
const ADD_PRODUCE = '/produce/add';
const ADD_DISPATCH = '/dispatch/add';
const GET_PRODUCE = '/produce/list';
const GET_CROPS = '/crops/list';
const GET_FARM = '/farms/list';
const GET_CUSTOMERS = '/customers/list';
const GET_DISPATCH_ITEMS = '/dispatch/list';

// http headers
const CONTENT_TYPE = 'Content-Type';
const AUTHORIZATION = 'Authorization';

// response codes
const RESPONSE_OK = 200;
const RESPONSE_CREATED = 201;
const SERVER_ERROR = 500;
const CLIENT_ERROR = 400;

// errors
const REQUIRED_INPUT = 'Required data missing';
const ERR_WALLET_NOT_FOUND = 'Could not find wallet for this transaction';
const ERR_TX_DATA_MISSING = 'Data required for transaction is missing';
const ERR_ACCESS_TOKEN_FETCH = 'Could not get access token for this transaction';
const ERR_FETCH_USER_WALLET = 'Could not get wallet for that user';

const ERR_SAVE_FAIL = 'Could not save data';

// security strings
const CIPHER_ALGORITHM = 'aes-256-cbc';
const STR_BASE64 = 'base64';
const STR_UTF8 = 'utf8';

module.exports = {
  API_V1,
  CONTENT_TYPE,
  AUTHORIZATION,
  RESPONSE_CREATED,
  RESPONSE_OK,
  SERVER_ERROR,
  CLIENT_ERROR,
  REQUIRED_INPUT,
  ERR_SAVE_FAIL,
  ERR_WALLET_NOT_FOUND,
  ERR_TX_DATA_MISSING,
  ERR_ACCESS_TOKEN_FETCH,
  ERR_FETCH_USER_WALLET,
  CIPHER_ALGORITHM,
  STR_BASE64,
  STR_UTF8,
  ADD_PRODUCE,
  GET_PRODUCE,
  GET_CROPS,
  GET_FARM,
  GET_CUSTOMERS,
  ADD_DISPATCH,
  GET_DISPATCH_ITEMS,
};

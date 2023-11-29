const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const {API_V1} = require('./constants/ApiStrings');
const v1Router = require('./v1/routes/Routes');
const connectDB = require('./utils/DbConnection');

connectDB();
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(API_V1, v1Router);



module.exports = {app};
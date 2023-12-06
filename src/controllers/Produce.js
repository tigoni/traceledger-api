/* eslint-disable consistent-return */
const {
  CLIENT_ERROR,
  REQUIRED_INPUT,
  SERVER_ERROR,
  RESPONSE_CREATED,
  RESPONSE_OK,
} = require('../constants/ApiStrings');
const { addNew } = require('../services/Produce');

const addProduce = async (request, response) => {
  const {
    productName,
    farm,
    weight,
    grade,
    harvestDate,
    collectionDate,
    collectionPoint,
    comments,
    nftUrl,
  } = request.body;
  if (
    !productName
    || !farm
    || !weight
    || !grade
    || !harvestDate
    || !collectionDate
    || !collectionPoint
    || !comments
    || !nftUrl
  ) {
    return response.status(CLIENT_ERROR).json({
      data: {
        error: REQUIRED_INPUT,
      },
    });
  }
  try {
    const saved = await addNew(request.body);
    if (saved) {
      return response.status(RESPONSE_CREATED).json(saved);
    }
    return response.status(RESPONSE_OK).json('No saved item returned');
  } catch (error) {
    response.status(SERVER_ERROR).json({
      error,
    });
  }
};

module.exports = { addProduce };

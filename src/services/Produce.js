const Produce = require('../database/Produce');
const { ERR_SAVE_FAIL } = require('../constants/ApiStrings');

const addNew = async (productDetails) => {
  let added = null;
  const {
    productName,
    farm,
    weight,
    grade,
    harvestDate,
    collectionDate,
    collectionPoint,
    // pesticidesUsed,
    comments,
    nftUrl,
  } = productDetails;
  try {
    added = await Produce.create({
      name: productName,
      farm,
      weight,
      grade,
      harvestDate,
      collectionDate,
      collectionPoint,
      // pesticidesUsed,
      comments,
      nftTxIdUrl: nftUrl,
    });
  } catch (error) {
    throw new Error(`User registration: ${ERR_SAVE_FAIL} because ${error}`);
  }
  return added;
};

const listProduce = async () => Produce.find({}).limit(10);

module.exports = { addNew, listProduce };

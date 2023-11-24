const Produce = require("../database/Produce");
const { ERR_SAVE_FAIL } = require("../constants/api-strings");

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
    pesticidesUsed,
    comments,
    nftUrl,
  } = productDetails;
  try {
    added = await Produce.create({
      name: productName,
      farm: farm,
      weight: weight,
      grade: grade,
      harvestDate: harvestDate,
      collectionDate: collectionDate,
      collectionPoint: collectionPoint,
      pesticidesUsed,
      weight: weight,
      comments: comments,
      nftTxIdUrl: nftUrl,
    });
  } catch (error) {
    throw new Error(`User registration: ${ERR_SAVE_FAIL} because ${error}`);
  }
  return added;
};

const listProduce = async () => {
  return await Produce.find({}).limit(10);
};

module.exports = { addNew, listProduce };

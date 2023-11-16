const product = require("../database/Product");
const { ERR_SAVE_FAIL } = require("../constants/api-strings");

const addNew = async (productDetails) => {
  let added = null;
  const {
    productName,
    weight,
    harvestDate,
    collectionDate,
    grade,
    category,
    farm,
    rating,
    comments,
    collectionPoint,
  } = productDetails;
  try {
    added = await product.create({
      productName: productName,
      weight: weight,
      harvestDate: harvestDate,
      collectionDate: collectionDate,
      grade: grade,
      category: category,
      farm: farm,
      rating: rating,
      comments: comments,
      collectionPoint: collectionPoint,
    });
  } catch (error) {
    throw new Error(`User registration: ${ERR_SAVE_FAIL} because ${error}`);
  }
  return added;
};

module.exports = { addNew };

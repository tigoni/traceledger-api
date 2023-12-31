const Dispatch = require('../database/Dispatch');
const { ERR_SAVE_FAIL } = require('../constants/ApiStrings');

const addNew = async (dispatchDetails) => {
  let added = null;
  const {
    produceItems,
    packWeight,
    destination,
    packedOn,
    packedBy,
    status,
    dispatchNftUrl,
  } = dispatchDetails;
  try {
    added = await Dispatch.create({
      produceItems,
      packWeight,
      destination,
      packedOn,
      packedBy,
      dispatchNftUrl,
      dispatchStatus: status,

    });
  } catch (error) {
    throw new Error(`Dispatch add: ${ERR_SAVE_FAIL} because ${error}`);
  }
  return added;
};

// eslint-disable-next-line no-dupe-keys
const listDispatches = async () => Dispatch.find({}).populate('dispatchStatus').populate({ path: 'produceItems', populate: { path: 'farm' }, populate: { path: 'name' } }).exec();

module.exports = { addNew, listDispatches };

const Dispatch = require("../database/Dispatch");
const Status = require ('../database/Status')
const { ERR_SAVE_FAIL } = require("../constants/api-strings");

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

const listDispatches = async () => {
    return await Dispatch.find({}).populate('dispatchStatus').populate({path:'produceItems', populate: {path: 'farm'}, populate:{path: 'name'}}).exec();
};

module.exports = { addNew, listDispatches };

const Dispatch = require("../database/Dispatch");
const { ERR_SAVE_FAIL } = require("../constants/api-strings");

const addNew = async (dispatchDetails) => {
    let added = null;
    const {
        produceItem,
        packWeight,
        destination,
        packedOn,
        packedBy,
        status,
        dispatchNftUrl,
    } = dispatchDetails;
    try {
        added = await Dispatch.create({
            produceItem,
            packWeight,
            destination,
            packedOn,
            packedBy,
            dispatchNftUrl,
            status,

        });
    } catch (error) {
        throw new Error(`Dispatch add: ${ERR_SAVE_FAIL} because ${error}`);
    }
    return added;
};

const listDispatches = async () => {
    return await Dispatch.find({}).limit(10);
};

module.exports = { addNew, listDispatches };

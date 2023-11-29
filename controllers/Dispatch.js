const {
    CLIENT_ERROR,
    REQUIRED_INPUT,
    SERVER_ERROR,
    RESPONSE_CREATED,
} = require("../constants/ApiStrings");
const { addNew, listDispatches} = require("../services/Dispatch");

const addDispatch = async (request, response) => {
    const {
        produceItems,
        packWeight,
        destination,
        packedOn,
        packedBy,
        status,
    } = request.body;
    if (
        !produceItems ||
        !packWeight ||
        !destination||
        !packedOn ||
        !packedBy ||
        !status
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
        response.status(RESPONSE_CREATED).json(saved);
    }
} catch (error) {
    console.log(error);
    response.status(SERVER_ERROR).json({
        error: error,
    });
}
}

const getDispatchItems = async (request, response) => {

    try {
        return response.json(await listDispatches());
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = {addDispatch, getDispatchItems}
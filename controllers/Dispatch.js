const {
    CLIENT_ERROR,
    REQUIRED_INPUT,
    SERVER_ERROR,
    RESPONSE_CREATED,
} = require("../constants/api-strings");
const { addNew } = require("../services/Dispatch");

const addDispatch = async (request, response) => {
    const {
        produceItem,
        packWeight,
        destination,
        packedOn,
        packedBy,
        status,
    } = request.body;
    if (
        !produceItem ||
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

module.exports = {addDispatch}
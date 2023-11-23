const {
    CLIENT_ERROR,
    REQUIRED_INPUT,
    SERVER_ERROR,
    RESPONSE_OK,
    ERR_FETCH_USER_WALLET,
    RESPONSE_CREATED,
} = require("../constants/api-strings");
const { listAll } = require("../services/Crop");


const getCrops = async (request, response) => {

    try {
        return response.json(await listAll());
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = {getCrops}
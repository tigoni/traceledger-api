const {
    CLIENT_ERROR,
    REQUIRED_INPUT,
    SERVER_ERROR,
    RESPONSE_OK,
    ERR_FETCH_USER_WALLET,
    RESPONSE_CREATED,
} = require("../constants/ApiStrings");
const { listAllFarms, listAllCrops, listAllProduce, listAllCustomers } = require("../services/SelectionOptions");


const getCrops = async (request, response) => {

    try {
        return response.json(await listAllCrops());
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

const getFarm = async (request, response) => {

    try {
        return response.json(await listAllFarms());
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

const getProduce = async (request, response) => {

    try {
        return response.json(await listAllProduce());
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

const getCustomers = async (request, response) => {

    try {
        return response.json(await listAllCustomers());
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}


module.exports = {getCrops, getProduce, getFarm, getCustomers }
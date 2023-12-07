const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../Server');
require('dotenv').config();

const addProduce = require('../controllers/Produce');
const { API_V1, GET_PRODUCE } = require('../constants/ApiStrings');

/*Connect to the database before each test */
beforeEach(async () => {
    await mongoose.connect(process.env.DATABASE_URI)
});

describe('GET /api/produce/list', () => {
    test('It should fetch all products', async () => {
        const res = await request(app).get(API_V1 + GET_PRODUCE)
        expect(res.statusCode).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    }, 10000);

    //   test('It should return an error', () => {;
    //  ; })
});


/*Close database connection after each test */
afterEach(async () => {
    app.close();
    mongoose.connection.close()
});
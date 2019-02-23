const request = require('supertest');
const server = require('../Api/server');
const db = require('../Config/dbConfig');

describe('checks basic get route', ()=>{
it('says true', ()=>{
    expect(true).toBe(true)
})
it('returns 200', async ()=>{
    const response = await request(server).get('/')

    expect(response.status).toBe(200);
})

})

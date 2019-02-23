const request = require('supertest');
const server = require('../../Api/server');
const db = require('../dbConfig');
const data = require('../../Helpers/testingData')

describe('tests for login routes', ()=>{
    describe('register', ()=>{
      it('responds with type json', async (req, res)=>{
          const row = await request(server);
      })
    })
})
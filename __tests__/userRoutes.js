const request = require('supertest');
const server = require('../Api/server');
const db = require('../Config/dbConfig');

describe('User routes', ()=>{
    describe('gets all users', ()=>{
        it(' responds with a type json', async ()=>{
            const response = await request(server).get('/users');
    
            expect(response.type).toMatch(/json/i);
        }),
        it('responds with status 200', async ()=>{
            const response = await request(server).get('/users');
    
            expect(response.status).toBe(200);
        })
    }),
    describe('gets user by ID')
})
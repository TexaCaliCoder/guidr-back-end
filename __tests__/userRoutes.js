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
    describe('gets user by ID', ()=>{
        it('responds with the status 200', async ()=>{
            const id = 1;
            const response = await request(server).get(`/users/${id}`)
            
            expect(response.status).toBe(200);

        }),
        it('responds with the type JSON', async ()=>{
            const id = 1;
            const response = await request(server).get(`/users/${id}`)
            
            expect(response.type).toMatch(/json/i);

        });
    }),
    describe('Update User', ()=>{
        it('returns 1 when the object is updated', async ()=>{
            const id = 6;
            const body = {
            name: 'Bill Roth',
            age: 64,
            tagline: 'I lead with confidence'
            }
            const response = await request(server)
            .put(`/users/${id}`).send(body);

            expect(response.text).toBe('1');
        });
    });
    describe('delete User', ()=>{
        beforeEach(async ()=>{
            
        })
    })
})
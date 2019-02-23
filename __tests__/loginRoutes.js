const request = require('supertest');
const server = require('../Api/server');
const db = require('../Config/dbConfig');
// const bcrypt = require('bcryptjs')
// const data = require('../../Helpers/testingData')

describe('tests for login routes', ()=>{
    describe('register', ()=>{
        // afterEach(async ()=>{
        //     await db('guidrTestDB').truncate();
        // }),
      it('responds with type json', async ()=>{
            const body = {
                name:'Payton Souder',
                username: 'TheOtherTeacher',
                password: 'password'
            };
            const response = await request(server)
            .post('/users/registration').send(body);

            expect(response.type).toMatch(/json/i);
      })
    })
      describe('login', ()=>{
          it('responds with type json', async ()=>{
              const body = {
                  username: 'TheOtherTeacher',
                  password: 'password'
              };
              const response = await request(server)
              .post('/users/login').send(body);
  
              expect(response.type).toMatch(/json/i);
          }),
          it('responds with a 200', async ()=>{
                const body = {
                    username: 'TheOtherTeacher',
                    password: 'password'
                };
                const response = await request(server)
                .post('/users/login').send(body);

                expect(response.status).toBe(200)
          })
      })
})
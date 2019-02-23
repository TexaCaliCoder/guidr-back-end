const request = require('supertest');
const server = require('../Api/server');
const db = require('../Config/dbConfig');
// const bcrypt = require('bcryptjs')
// const data = require('../../Helpers/testingData')

describe('tests for login routes', ()=>{
    describe('register', ()=>{
        beforeEach(async ()=>{
            const username = 'TheTeachersBride'
            await db('users').where('username', username).del();
        }),
      it('responds with type json', async ()=>{
            const body = {
                name:'Sam Weaver',
                username: 'TheTeachersBride',
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
                  username: 'TheRoth',
                  password: 'password'
              };
              const response = await request(server)
              .post('/users/login').send(body);
  
              expect(response.type).toMatch(/json/i);
          }),
          it('responds with a 200', async ()=>{
                const body = {
                    username: 'POPs',
                    password: 'password'
                };
                const response = await request(server)
                .post('/users/login').send(body);

                expect(response.status).toBe(200)
          })
      })
})
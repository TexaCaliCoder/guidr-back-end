const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          name: 'Chris Roth',
          username: 'TheRoth',
          password: bcrypt.hashSync('password'),
        },
        {
          name: 'Megan Fontenot',
          username: 'BabyGirl',
          password: bcrypt.hashSync('password'),
       },
        {
          name: 'Corey Deveroux',
          username: 'TheSupervisor',
          password: bcrypt.hashSync('password'),
       },
        {
          name: 'Jenna Dunham',
          username: 'TeachThisMFR',
          password: bcrypt.hashSync('password'),
        },
        {
          name: 'James Franco',
          username: 'TheGoodDude',
          password: bcrypt.hashSync('password'),
        },
      {
        name: 'William Edward',
        username: 'POPs',
        password: bcrypt.hashSync('password'),
      }
      ]);
    });
};

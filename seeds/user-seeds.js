const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'logan',
    email: 'logan@gmail.com',
    password: '123'
  },
  {
    username: 'test',
    email: 'test@aol.com',
    password: '123'
  },
  {
    username: 'User3',
    email: 'User3@hotmail.com',
    password: 'password123'
  },
  {
    username: 'Random Person',
    email: 'random@amazon.com',
    password: 'password123'
  },
  {
    username: 'new user',
    email: 'new@yahoo.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

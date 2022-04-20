const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec',
    contents: 'Donec posuere metus vitae ipsum.',
    user_id: 1
  },
  {
    title: 'Morbi',
    contents: 'Morbi non quam nec dui luctus rutrum',
    user_id: 1
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 2
  },
  {
    title: 'Donec ',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 2
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 3
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 3
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 3
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 5
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 5
  },
  {
    title: 'Donec',
    contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

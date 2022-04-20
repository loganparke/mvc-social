const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Thanks for the post.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Hey everyone!',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'this is my first comment!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Comment Comment Comment',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Thanks for the post.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Hey everyone!',
    user_id: 5,
    post_id: 2
  },
  {
    comment_text: 'this is my first comment!',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Comment Comment Comment',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Thanks for the post.',
    user_id: 2,
    post_id: 8
  },
  {
    comment_text: 'Hey everyone!',
    user_id: 5,
    post_id: 8
  },
  {
    comment_text: 'this is my first comment!',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Comment Comment Comment',
    user_id: 1,
    post_id: 8
  },
  {
    comment_text: 'Thanks for the post.',
    user_id: 2,
    post_id: 14
  },
  {
    comment_text: 'Hey everyone!',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'this is my first comment!',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Comment Comment Comment',
    user_id: 1,
    post_id: 14
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

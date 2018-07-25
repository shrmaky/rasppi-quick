'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // todoList Routes
  app.route('/user')
    .get(user.list_all_user)
    .post(user.create_a_user);


  app.route('/user/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);
};

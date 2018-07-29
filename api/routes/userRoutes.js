'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');


    app.get('/enroll', function (req, res) {

        var PythonShell = require('python-shell');

        PythonShell.run('/usr/share/doc/python-fingerprint/examples/example_enroll.py', function (err) {
            if (err) throw err;
            console.log('finished');
        });

        res.send('Finger Enrolled')
    })

  // todoList Routes
  app.route('/user')
    .get(user.list_all_user)
    .post(user.create_a_user);


  app.route('/user/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);
};

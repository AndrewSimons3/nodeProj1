var unsecurePlainTextPassword = "password";

var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(unsecurePlaintextPassword, salt, function(err, hash) {
      console.log(hash)
  });
});
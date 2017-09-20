// Used to generate hashed passwords for seed data
const bcrypt = require('bcrypt')

const password = 'tomato'

bcrypt.hash( password, 10 )
  .then( hash => console.log('hashed password for ' +  password + ' is: ' + hash ))
  .catch( error => console.log('bcrypt error ---> ' + error ))

const PasswordValidator = require('password-validator');

const schema = new PasswordValidator();


schema
  .is().min(6)                                   
  .is().max(50)                                 
  .has().uppercase()                             
  .has().lowercase()                             
  .has().not().spaces()                          
  .is().not().oneOf(['Password123', '123456']);

module.exports = schema;
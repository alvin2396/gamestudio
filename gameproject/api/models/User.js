/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username:{
          type: 'string'
          required:true
      },
      email:{
          type: 'string'
          required:true
      },
      password:{
          type: 'string'
          required:true
      }

  },
  connection:'database'
};


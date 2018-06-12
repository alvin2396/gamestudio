/**
 * Profile.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  userid: {
    model: 'user'
  },

  nama:{
    type: 'string'
  },

  alamat: {
    type: 'string'
  },
  spesifikasi_id: {
    model: 'spesifikasi'
  }

  photo_url: {
    type: 'string'
  }

  },
  connection:'database'

};


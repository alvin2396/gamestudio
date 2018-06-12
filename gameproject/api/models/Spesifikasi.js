/**
 * Spesifikasi.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   spesifikasi_id: {
        type : 'string'
   },

   ram_id: {
        model: 'ram'
   }

   processor_id: {
        model: 'processor'
   }

   vga_id: {
        model: 'vga'
   }

   



  },
  connection : 'database'

};


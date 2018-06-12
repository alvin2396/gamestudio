/**
 * Vga.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   vga_id: {
        type: 'string'
   }

   vga_name: {
        type: 'string'
   }

   vga_score: {
        type: 'number'
   }

  },
  connection : 'database'

};


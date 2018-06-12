/**
 * Processor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    processor_id: {
        type : 'string'
    }

    processor_name : {
        type : 'string'
    }

    processor_score : {
        type: 'number'
    }

  },

};


/**
 * Rating.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    user_id : {
        model : 'user'
    }

    game_id : {
        model : 'games'
    }

    rating_value : {
        type : 'number'
    }

     gameplay_value : {
      type: 'number'
    }

    graphic_value : {
      type : 'number'
    }

    controls_value : {
      type : 'number'
    }

    story_value : {
      type : 'number'
    }

    music_value : {
      type : 'number'
    }

  },

};


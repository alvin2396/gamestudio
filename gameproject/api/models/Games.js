/**
 * Games.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    game_id : {
        type: 'string'
    }
    genre{
        type: 'string'
    }

    screenshot_url : {
        type: 'string'
    }

    photo_url : {
        type : 'string'
    }

    video_url : {
        type : 'string'
    }

    harga : {
        type : 'number'
    }

    min_requirement : {
        model : 'spesifikasi'
    }

    recommended_requirement : {
        model : 'spesifikasi'
    }

    discount : {
        type : 'number'
    }

    description : {
        type : 'string'
    }

    OS : {
        type : 'string'
    }

    HDD_space : {
        type : 'string'
    }

    rating : {
        type : 'number'
    }

    Story_rating : {
        type : 'number'
    }

    gameplay_rating : {
        type : 'number'
    }

    controls_rating : {
        type : 'number'
    }

    music_rating : {
        type : 'number'
    }

    graphic_rating : {
        type : 'number'
    }

  },
  connection : 'database'

};


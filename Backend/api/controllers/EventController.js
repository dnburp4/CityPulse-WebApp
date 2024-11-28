/**
 * EventController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    find: async function (req, res) {
    

    let event = [

        {
            "id": "01",
            "name": "Tomorrowland",
            "bild": "test",
            "datum": "test",
            "Typ": "test",
            "Preis": "10",
            "Bewertung": "test"


        },


        {
            "id": "01",
            "name": "Tomorrowland",
            "bild": "test",
            "datum": "test",
            "Typ": "test",
            "Preis": "10",
            "Bewertung": "test"


        }

    ]
return res.json(event);

    
}
};


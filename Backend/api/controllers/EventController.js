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
            "bild": "src/assets/images/tomorrowland.jpg",
            "datum": "01.12.2024",
            "typ": "Konzert",
            "preis": "100",
            "bewertung": 4,
            "ort": "Konstanz"

        },


        {
            "id": "02",
            "name": "Theater",
            "bild": "src/assets/images/theater.jpg",
            "datum": "03.12.2024",
            "typ": "Theater",
            "preis": "10",
            "bewertung": 2,
            "ort": "HTWG"

        }

    ]
return res.json(event);

    
}
};


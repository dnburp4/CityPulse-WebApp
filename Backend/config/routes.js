/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /event': { controller: 'EventController', action: 'find' },
  'POST /event': { controller: 'EventController', action: 'create' },
  'PUT /event/:id': { controller: 'EventController', action: 'update' },
  'DELETE /event/:id': { controller: 'EventController', action: 'destroy' },

  'GET /event/filter': { controller: 'EventController', action: 'filter' },
  //'GET /event/:id': 'meal.findOne',
  //'DELETE /event/:id': 'meal.destroy'

  'GET /newsBackend': { controller: 'NewsController', action: 'find' },
  'POST /newsBackend': { controller: 'NewsController', action: 'create' },
  'PUT /newsBackend/:id': { controller: 'NewsController', action: 'update' },
  'DELETE /newsBackend/:id': { controller: 'NewsController', action: 'destroy' },


  'GET /tickets': { controller: 'TicketController', action: 'find' },
  'POST /tickets': { controller: 'TicketController', action: 'create' },
  'PUT /tickets/:id': { controller: 'TicketController', action: 'update' },
  'DELETE /tickets/:id': { controller: 'TicketController', action: 'destroy' },


  'GET /restricted': "restricted.example",
  'GET /user' : {controller: 'UserController', action: 'find'}, //Wichtig fuer die Anzeige von Name und Attributen auf der Webseite 
  'POST /user' : {controller: 'UserController', action: 'register'}, //Registrieung von Benutzer und die neue Benutzer speichern
  'POST /login': 'UserController.login',
  'DELETE /user/:id': { controller: 'UserController', action: 'destroy' },




  'GET /event/:id': { controller: 'EventController', action: 'findOne' },


  'POST /ticketkauf': { controller: 'TicketkaufController', action: 'create' },

  'GET /ticketkauf': { controller: 'TicketkaufController', action: 'find' },




  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
   
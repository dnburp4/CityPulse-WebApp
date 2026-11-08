/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

const path = require('path');

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'spaFallback',
      'router',
      'www',
      'favicon',
    ],

    /***************************************************************************
    * SPA-Fallback fuer das Vue-Frontend (createWebHistory):                    *
    * Ruft der Browser eine Seite direkt auf (z.B. /event/abc oder /news nach   *
    * einem Reload), liefern wir die index.html aus. API-Aufrufe von axios      *
    * schicken kein "text/html" im Accept-Header und landen weiter im Router.   *
    ***************************************************************************/
    spaFallback: function (req, res, next) {
      const isPageRequest = req.method === 'GET' &&
        (req.headers.accept || '').includes('text/html') &&
        !path.extname(req.path) &&
        req.path !== '/health';
      if (!isPageRequest) { return next(); }
      return res.sendFile(path.resolve(__dirname, '../assets/index.html'));
    },


    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

  },

};

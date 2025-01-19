// api/controllers/UserController.js
module.exports = {



  login: async function (req, res) {
    let params = req.body;
  
    try {
      // Benutzer anhand der E-Mail finden
      sails.log.debug("Login-Anfrage für E-Mail:", params.emailAddress);
      let user = await User.findOne({
        emailAddress: params.emailAddress.toLowerCase(),
      });
  
      // Wenn kein Benutzer gefunden wurde "404 Not Found" zurückgeben
      if (!user) {
        sails.log.debug("Benutzer nicht gefunden:", params.emailAddress);
        return res.status(404).json({ message: "Diese E-Mail-Adresse existiert nicht." });
      }
  
      // Passwort überprüfen
      try {
        await sails.helpers.passwords.checkPassword(params.password, user.password);
      } catch (err) {
        // Spezifischen Fehler für falsches Passwort abfangen
        if (err.code === "incorrect") {
          sails.log.debug("Falsches Passwort für Benutzer:", user.emailAddress);
          return res.status(401).json({ message: "Das eingegebene Passwort ist falsch." });
        }
        // Andere Fehler und 500 zurückgeben
        sails.log.error("Passwortprüfung fehlgeschlagen:", err);
        return res.status(500).json({ message: "Ein Serverfehler ist aufgetreten. Bitte versuchen Sie es später erneut." });
      }
  
      // Session initialisieren wenn erfolgreich
      req.session.userId = user.id;
      req.session.user = user;
  
      sails.log.debug("Login erfolgreich für Benutzer:", user.emailAddress);
      return res.json(user);
  
    } catch (error) {
      sails.log.error("Login-Fehler:", error);
      return res.status(500).json({ message: "Ein Serverfehler ist aufgetreten. Bitte versuchen Sie es später erneut." });
    }
  }
  
,  
  

    register: async function (req, res) {
      sails.log.debug("Creating user...");
      let params = req.body;
      let newEmailAddress = params.emailAddress.toLowerCase();
  
      let user = await User.create(
          { emailAddress: newEmailAddress, 
            fullName: params.fullName, 
            isSuperAdmin:false,
           password: await sails.helpers.passwords.hashPassword(params.password), 
           phoneNumber: params.phoneNumber, 
           address: params.address
           }).intercept('E_UNIQUE', 'emailAlreadyInUse')
           .intercept({name: 'UsageError'}, 'invalid')
           .fetch();;
  
      // Store the user's new id in their session.
      req.session.userId = user.id;
      req.session.user = user;
      return res.json(user);
    },
  
    async update(req, res) {
      try {
        const updatedUser = await User.updateOne({ id: req.params.id }).set(req.body);
        if (!updatedUser) {
          return res.notFound();
        }
        return res.json(updatedUser);
      } catch (error) {
        return res.serverError(error);
      }
    },
  
  


    destroy: async function (req, res) {
      sails.log.debug("Delete user....");
      await User.destroy({ id: req.params.id });      
      res.ok();
    },

    logout: async function (req, res) {
      delete this.req.session.userId;
      return res.ok();
    },


    //count
    countUsers: async function (req, res) {
      try {
        const count = await User.count(); // Anzahl der Benutzer zählen
        return res.json({ count }); // Anzahl als JSON zurückgeben
      } catch (error) {
        sails.log.error('Fehler im countUsers:', error);
        return res.serverError(error); // Fehler zurückgeben
      }
    },
    
    
    
    

  };
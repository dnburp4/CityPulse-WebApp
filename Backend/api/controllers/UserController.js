// api/controllers/UserController.js
module.exports = {



  login: async function (req, res) {
    let params = req.body;
    let user = await User.findOne({
      emailAddress: params.emailAddress.toLowerCase(),
    });
    // If there was no matching user, respond thru the "badCombo" exit.
    if (!user) {
      throw "badCombo";
    }
    // If the password doesn't match, then also exit thru "badCombo".
    await sails.helpers.passwords
      .checkPassword(params.password, user.password)
      .intercept("incorrect", "badCombo");
    // Modify the active session instance.
    req.session.userId = user.id;
    req.session.user = user;
    return res.json(user);
  },  

    async find(req, res) {
      try {
        const users = await User.find();
        return res.json(users);
      } catch (error) {
        return res.serverError(error);
      }
    },

    register: async function (req, res) {
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
  
    // async destroy(req, res) {
    //   try {
    //     const deletedUser = await User.destroyOne({ id: req.params.id });
    //     if (!deletedUser) {
    //       return res.notFound();
    //     }
    //     return res.json(deletedUser);
    //   } catch (error) {
    //     return res.serverError(error);
    //   }
    // },


    destroy: async function (req, res) {
      sails.log.debug("Delete user....");
      await User.destroy({ id: req.params.id });      
      res.ok();
    },

    logout: async function (req, res) {
      delete this.req.session.userId;
      return res.ok();
    },


  };
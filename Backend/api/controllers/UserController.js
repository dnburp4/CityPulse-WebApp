// api/controllers/UserController.js
module.exports = {
    async find(req, res) {
      try {
        const users = await User.find();
        return res.json(users);
      } catch (error) {
        return res.serverError(error);
      }
    },
  
    async create(req, res) {
      try {
        const newUser = await User.create(req.body).fetch();
        return res.json(newUser);
      } catch (error) {
        return res.serverError(error);
      }
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
  
    async destroy(req, res) {
      try {
        const deletedUser = await User.destroyOne({ id: req.params.id });
        if (!deletedUser) {
          return res.notFound();
        }
        return res.json(deletedUser);
      } catch (error) {
        return res.serverError(error);
      }
    },
  };
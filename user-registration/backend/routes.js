const { User } = require('./models');

module.exports = (app) => {
  app.get('/', async (req, res) => {
    let users;
    try {
      users = await User.find();
    } catch (err) {
      throw err;
    }
    users = users.map((user) => {
      user._doc.birthday = user.birthday
        .toString()
        .split(' ')
        .slice(1, 4)
        .join(' ');
      return user;
    });
    return res.json(users);
  });

  app.get('/:id', async (req, res) => {
    let { id } = req.params;
    let user;
    try {
      user = await User.findById(id);
    } catch (err) {
      throw err;
    }
    return res.json(user);
  });

  app.post('/', async (req, res) => {
    let user = req.body;
    try {
      user = await User.create(user);
    } catch (err) {
      throw err;
    }
    return res.json(user);
  });

  app.delete('/:id', async (req, res) => {
    let { id } = req.params;
    let user;
    try {
      user = await User.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
    if (user) return res.json({ deleted: true });
    return res.json({ deleted: false });
  });

  app.post('/:id', async (req, res) => {
    let user = req.body;
    let { id } = req.params;
    try {
      user = await User.findByIdAndUpdate(id, user, { new: true });
    } catch (err) {
      throw err;
    }
    if (user) return res.json({ success: true, user });
    return res.json({ success: false });
  });
};

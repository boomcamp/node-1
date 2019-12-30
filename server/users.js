const list = require("../users.json");
module.exports = {
  getUsers: (req, res) => {
    if (req.query.name) {
      const regex = new RegExp(req.query.name, "gi");
      const users = list.filter(
        ({ first_name, last_name }) =>
          first_name.match(regex) || last_name.match(regex)
      );
      !users
        ? res.status(500).send("User not found!")
        : res.status(200).send(users);
    }
    res.status(200).send(list);
  },
  getUserById: (req, res) => {
    const user = list.find(x => x.id === parseInt(req.params.id));
    !user
      ? res.status(500).send("User not found!")
      : res.status(200).send(user);
  }
};

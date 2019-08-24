const addCity = require("../database/queries/addCity");

const add = (req, res, next) => {
  const { name, city } = req.body;

  addCity(name, city)
    .then(() => res.redirect("/"))
    .catch(next);
};

module.exports = add;

const getCities = require("../database/queries/getCities");

const get = (req, res, next) => {
  getCities()
    .then(result => {
      return { cities: result.rows };
    })
    .then(result => res.json(result))
    .catch(next);
};

module.exports = get;

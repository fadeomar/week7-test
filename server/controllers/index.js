const express = require("express");
const getCity = require("./get");
const addCity = require("./add");

const router = express.Router();

router.get("/cities", getCity);

router.post("/add-city", addCity);

module.exports = router;

const express = require("express");
const router = express.Router();

//variable customerController
const customerController = require("../controllers/customerController");

//metodo list
router.get("/", customerController.list);
router.post("/add", customerController.save);

module.exports = router;

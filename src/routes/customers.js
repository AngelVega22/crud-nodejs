const express = require("express");
const router = express.Router();

//variable customerController
const customerController = require("../controllers/customerController");

//metodo list
router.get("/", customerController.list);
//metodo save
router.post("/add", customerController.save);
//metodo delete
router.get("/delete/:id", customerController.delete);
//metodo edit get
router.get("/update/:id", customerController.edit);
//metodo edit post
router.post("/update/:id", customerController.update);

module.exports = router;

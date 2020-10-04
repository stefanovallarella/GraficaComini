var express = require('express');
var router = express.Router();
const controller = require("../controllers/formController");
const validationForm = require("../validators/validator");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Ruta formulario */
router.post("/", validationForm.emailValidator , controller.index );

module.exports = router;

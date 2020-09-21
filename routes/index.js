var express = require('express');
var router = express.Router();
const controller = require("../controllers/formController");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Ruta formulario */
router.post("/email", controller.index );

module.exports = router;

var express = require('express');
const { VARCHAR } = require('mysql/lib/protocol/constants/types');
var router = express.Router();
var db=require("../conexoin/conexion")

/* GET Productos. */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM productos", function(err,resultado){
    console.log(resultado);

    res.render('productos', { title: 'Producto disponibles',Libros:resultado });
});




   
  });

module.exports = router;




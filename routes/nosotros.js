var conexion = require("../conexoin/conexion");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

 

  res.render('nosotros', { title: 'Mi web' });
});

router.post('/',function(req,res,next){
  const nombre = req.body.nombre;
  const imagen  = req.body.imagen;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  conexion.query('INSERT INTO productos (nombre, imagen, descripcion, precio) VALUES (?,?,?,?)',
  [nombre, imagen, descripcion, precio],
  (error, resultado)=>{
   if(error){
       console.log(error);
   }
   else{
       res.redirect('productos')
   }
}


)
});



module.exports = router;
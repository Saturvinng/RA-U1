var conexion = require("../conexoin/conexion");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Mi web' });
});

router.post('/', function(req, res, next) {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const password = req.body.password;  
  conexion.query('INSERT INTO login (nombre, apellido, email, password) VALUES (?,?,?,?)',
  [nombre, apellido, email, password],
  (error, resultado)=>{
   if(error){
       console.log(error);
   }
   else{
       res.redirect('/')
   }
}


)
});

module.exports = router;

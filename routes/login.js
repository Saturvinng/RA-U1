var express = require('express');
var router = express.Router();
var db=require("../conexoin/conexion")

/* GET users listing. */
router.get('/', function(req, res, next) {

    
    
    res.render('login', { title: 'Mi web' });
});
var crud = require('../controllers/registro');
router.post('/auth', crud.auth);

router.get('/modificar/:ID', function(req, res, next) {
    const ID = req.params.ID;
    db.query("SELECT * FROM productos WHERE ID = ?",[ID],(error,resultado)=>{
      console.log(resultado);
      res.render('modificar', { title: 'Editar', Libros:resultado[0] });
    })
  });


  router.post('/edit', crud.edit);
  router.get('/borrar/:ID', (req, res)=>{
    const ID = req.params.ID;
    db.query('DELETE FROM productos WHERE ID = ?', [ID],
    function(error,resultado){
      if(error){
        console.log(error);
      }
      else{
          res.redirect('/productos');
      }
    });
    
  });
  module.exports = router;

  


module.exports = router;

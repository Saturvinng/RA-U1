var conexion = require("../conexoin/conexion");
var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
    const RID = req.body.ID;
    const Rnombre = req.body.nombre;
    const Rimagen  = req.body.imagen;
    const Rdescripcion = req.body.descripcion;
    const Rprecio = req.body.precio;
    
    conexion.query('UPDATE productos SET ? WHERE ID = ?',
    [{nombre:Rnombre, imagen:Rimagen, descripcion:Rdescripcion, precio:Rprecio}, RID],
    (error, resultado)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('productos')
        }
    })
});



module.exports = router;
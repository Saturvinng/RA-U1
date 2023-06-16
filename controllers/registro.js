var conexion = require("../conexoin/conexion");



exports.edit = (req,res)=>{
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
}



exports.auth = (req, res)=>{
    const correo = req.body.email;
    const contrasena = req.body.pass;
    if(correo && contrasena){
        
        conexion.query('SELECT * FROM login WHERE gmail = ?',[correo],
        function(error,resultado){
            if(resultado.length == 0)
            {
                console.log("Usuario Y/O contraseña INCORRECTOS!");
                res.redirect('/')
            }
            else
            {
                console.log("Inicio de Sesión Correcto!");
                res.redirect('index')
            }
        });
    }
    else
    {
        console.log("Llena los campos faltantes!!");
        res.redirect('/')
    }
}

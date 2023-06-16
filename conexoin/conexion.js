var mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'ventas'
})

connection.connect(
    (err)=>{
        if(!err){
            console.log('conexion establecida');
        }else{
            console.log("onexion fallida");
        }
    }
);


module.exports=connection;






//configuracion para la base de datos 
const config = {
    user: '',
    password: '',
    server: '', //''
    database: 'Northwind', // nombre de la base de datos
    options: {
        trustedconnection: true, // para la conexión local
        enableArithAbort: true,
        encrypt: false,
        instancename: 'SQLEXPRESS19' // en caso se tenga alguna instancia
    }
}
module.exports = config; //exportamos la configuración



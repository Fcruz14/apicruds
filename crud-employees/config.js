
//configuracion para la base de datos 
const config = {
    user: 'userApps',
    password: 'bloqueta2023',
    server: 'DESKTOP-0LDM0CI', //'172.16.4.222'
    database: 'Northwind', // nombre de la base de datos
    options: {
        trustedconnection: true, // para la conexión local
        enableArithAbort: true,
        encrypt: false,
        instancename: 'SQLEXPRESS19' // en caso se tenga alguna instancia
    }
}
module.exports = config; //exportamos la configuración

// Cargue la conexion del grupo MySQL
const pool = require('../data/config');

//Ruta de la app
const router = app => {
    //Mostrar la mensaje de bienvenida de root
    app.get('/',(request,response)=> {
        message: 'Bienvenido a Node.js Express Rest API'
    });

}
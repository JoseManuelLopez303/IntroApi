// Cargue la conexion del grupo MySQL
const pool = require('../data/config');

//Ruta de la app
const router = app => {
    //Mostrar la mensaje de bienvenida de root
    app.get('/',(request,response)=> {
        response.send({
        message: 'Bienvenido a Node.js Express Rest API'
    });

    });
//Mostrar todos los usuario
app.get('/users',(request, response) => {
    pool.query('SELECT * FROM users',(error, result) => {
        if(error) throw error;
        response.send(result);
    });
});

//Mostrar un solo usaurio por ID
app.get('/users/:id',(request, response) => {
    pool.query('SELECT * FROM users WHERE id = ?', id,(error, result) => {
        if(error) throw error;
        response.send(result);
    });
});


    }

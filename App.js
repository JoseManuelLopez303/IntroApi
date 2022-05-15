const express = require('express');
const port = 3002;

//Para permitir manejo de POST Y PUT
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();


//Usar Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);


//iniciar el servidor
const server=app.listen(port,(error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`El servidor escucha el puerto ${server.address().port}`)
})


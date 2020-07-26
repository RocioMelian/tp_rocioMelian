const express = require('express')
const app = express()
const fs = require('fs')
app.listen(3030, () => console.log('Todo marcha bien Milhouse en el puerto 3030'));

const rutasAutos = require('./routes/autos');
const rutasHome = require('./routes/home');
const rutasMarcas = require('./routes/marcas');
const rutasSucursales = require('./routes/sucursales');

app.use ('/', rutasHome);
app.use ('/autos', rutasAutos);
app.use('/marcas', rutasMarcas);
app.use('/sucursales', rutasSucursales);
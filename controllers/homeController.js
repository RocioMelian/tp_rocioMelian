const dataBase = require('../dataBase')
const concesionarias = dataBase.leerJson()


let homeController = {
    index: (req, res) => {
        res.set({ 'content-type': 'text/plain; charset=utf-8' });
        let sucursalesVacio = []
        concesionarias.forEach(function(sucursales){
           sucursalesVacio.push(sucursales.sucursal)
        })
           sucursalesVacio = sucursalesVacio.join ('<br>')
           res.send('Bienvenidos a nuestra pagina ' + '<br>'
            + 'NUESTRAS SUCURSALES: ' +'<br>' +  '......................' + '<br>' + sucursalesVacio  + '<br>' + '......................')
       
       }
    }


module.exports = homeController
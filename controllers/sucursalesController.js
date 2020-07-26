const dataBase = require('../dataBase')
const concesionarias = dataBase.leerJson()

let sucursalesController = {
    index: (req, res) => {
        
        let sucursalesVacio = []
        concesionarias.forEach(function(sucursales){
           sucursalesVacio.push(sucursales.sucursal + ('<br>')  +  '-' + sucursales.direccion + ('<br>')  +  '-' + sucursales.telefono)
        })
           sucursalesVacio = sucursalesVacio.join ('<br>')
        
        for(let i=0; i<sucursalesVacio.length ; i++){
        res.send('NUESTRAS SUCURSALES: ' + ('<br>')  + '......................'  + ('<br>')  + sucursalesVacio + '......................')
    
        }
        
    },
    detalle: (req, res) => {
        res.writeHead(200,{ 'content-type': 'text/plain; charset=utf-8' });
        let idSucursal = req.params.sucursal
        concesionarias.forEach(concesionaria => {
            if(idSucursal == concesionaria.sucursal){
                res.write('Sucursal: ' + concesionaria.sucursal + "\n")
                res.write('Direccion: ' + concesionaria.direccion + "\n")
                res.write('Telefono: ' + concesionaria.telefono + "\n")
                
                res.write('AUTOS: ' +  "\n")
              concesionaria.autos.forEach(function(auto){
                res.write('MARCA: '+ auto.marca + " " + 'MODELO: ' + auto.modelo + " " + 'AÑO:' + auto.anio + " " + 'COLOR: ' + auto.color + "\n \n7")
               })
            }
        })
         res.end()   
        

               
    }
}


module.exports = sucursalesController
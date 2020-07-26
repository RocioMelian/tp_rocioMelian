const dataBase = require('../dataBase')
const concesionarias = dataBase.leerJson()

let marcasController = {
      index: (function(req, res){
          let marcas = []
          concesionarias.forEach(function(concesionaria){
              res.write("\n\n")
              res.write(concesionaria.sucursal + ": ")
              res.write(concesionaria.autos.length + ' autos' + "\n")
                concesionaria.autos.forEach(function(marca){
                  marcas.push(marca.marca)
                })
                let nuevoMarcas = Array.from(new Set(marcas))
                   nuevoMarcas.forEach(function(marcas){
                      res.write('\n' + marcas)
                })
                 let cantidadDeMarcas = nuevoMarcas.length
            res.write('\n' + 'CANTIDAD DE MARCAS ENCONTRADAS: '  + cantidadDeMarcas )
             })
          res.end()
    }),
        detalle:(function(req, res){
            res.writeHead(200,{ 'content-type': 'text/plain; charset=utf-8' });
             let idMarca = req.params.marca
             let datos = []
            concesionarias.forEach(concesionaria => {
                concesionaria.autos.forEach(function(auto){
                    if(idMarca == auto.marca){
                        datos.push(auto)
                        res.write('MARCA:' + auto.marca + "\n" )
                        res.write('MODELO:' + auto.modelo + "\n")
                        res.write('AÑO:' + auto.anio + "\n \n")
                    }
                })
            })
            let cantidadDeAutos = datos.length
            res.write('Total de autos: ' + cantidadDeAutos)
            res.write("\n")
        
            res.end() 
     })
}

module.exports = marcasController
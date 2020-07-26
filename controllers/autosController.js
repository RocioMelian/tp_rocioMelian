const dataBase = require('../dataBase')
const concesionarias = dataBase.leerJson()

let autosController = {
    index: (function(req, res){
        res.writeHead(200,{ 'content-type': 'text/plain; charset=utf-8' });
        let autos = []
        res.write('TODOS NUESTROS AUTOS: ' + '\n')
        res.write('--------------------------------------------------' + '\n')
          concesionarias.forEach(function(concesionaria){
              concesionaria.autos.forEach(function(auto){
                  autos.push(auto)
                  res.write('MARCA: ' + auto.marca + '\n')
                  res.write('MODELO: ' + auto.modelo + '\n')
                  res.write('AÑO: ' + auto.anio + '\n')
                  res.write('COLOR: ' + auto.color + '\n\n')
              })
          })
          autos = autos.length
          res.write('CANTIDAD DE AUTOS: ' + autos)
          res.end()
    }),
    detalle: (function(req, res){
        res.writeHead(200,{ 'content-type': 'text/plain; charset=utf-8' });
        let dato = []
        let idMarca = req.params.marca
            concesionarias.forEach(function(concesionaria){
                concesionaria.autos.forEach(function(auto){
                    if(idMarca == auto.marca){
                        dato.push(auto)
                        res.write('MARCA:' + auto.marca + "\n" )
                        res.write('MODELO:' + auto.modelo + "\n")
                        res.write('COLOR:' + auto.color + "\n")
                        res.write('AÑO:' + auto.anio + "\n \n")
                    }
                    
                })
            })
        res.end()
    }),
    dato: (function(req, res){
        res.writeHead(200,{ 'content-type': 'text/plain; charset=utf-8' });
        let dato = []
        let idDato = req.params.dato
        let idMarca = req.params.marca
            concesionarias.forEach(function(concesionaria){
                concesionaria.autos.forEach(function(auto){
                    if(idMarca == auto.marca && idDato == auto.color){
                        dato.push(auto)
                        res.write('MARCA:' + auto.marca + "\n" )
                        res.write('MODELO:' + auto.modelo + "\n")
                        res.write('COLOR:' + auto.color + "\n")
                        res.write('AÑO:' + auto.anio + "\n \n")
                        
                    }
                    else if(idMarca == auto.marca && idDato == auto.anio){
                        dato.push(auto)
                        res.write('MARCA:' + auto.marca + "\n" )
                        res.write('MODELO:' + auto.modelo + "\n")
                        res.write('COLOR:' + auto.color + "\n")
                        res.write('AÑO:' + auto.anio + "\n \n")
                    }
                })
            })
        res.end()
    })

}

module.exports = autosController
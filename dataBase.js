const fs = require('fs');
 
let dataBase = {
    leerJson:function(){
        let concesionariaJson = fs.readFileSync('./data/concesionarias.json','utf-8')
        let concesionarias = JSON.parse(concesionariaJson)
        return(concesionarias)
    }
}

module.exports = dataBase
console.clear()

const fs = require("fs")

const leerJson = fs.readFileSync("./tareas.json","utf8")
const jsonParse = JSON.parse(leerJson)

module.exports ={  

    listarTareas : () =>{

        for (let i = 0; i < jsonParse.length; i++) {
            console.log(i + 1 , jsonParse[i])
        }
     }

}

//listarTareas : () => jsonParse.forEach((e,i) =>  console.log(i + 1 , e))
 
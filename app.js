console.clear()

//const tareas = require("./tareas.json") // trae el json parseado, pero NO es lo que pide el TP
const process = require("process");
const { listarTareas } = require("./funcionesDeTareas");


const comando = process.argv[2]


switch (comando) {
    case "listar":
        
        listarTareas()
        break;
    case undefined:

        console.log("Atención - Tienes que pasar una acción.")
        break
    default:
        console.log("No entiendo qué quieres hacer.")
        break;
}

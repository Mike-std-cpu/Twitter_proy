const UserServices = require('../models/userServices');
const userServices = require('../models/userServices'); // No es neesario enlazar a la clase User, ya que en UserServices ya se enlaza.

/* Requerimientos:
 1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
 2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` 
    regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
 3.
 4.
 */

class View{
    static createUser(payload){//1
        if(payload === null){
            console.log("Erro es un null");
            return {error: "El payload no existe"}
        }else if(typeof payload.id === 'number' && typeof payload.user === 'string' && typeof payload.name === 'string'){//2 & 3
            return UserServices.create(payload.id, payload.userName, payload.name);
        }else{
            return {error: "El payload necesita tener valores validos"}
        }

        
    }
    
}

module.exports = View;
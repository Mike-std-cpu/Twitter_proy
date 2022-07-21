/*
Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados.
*/

//Importamos la clase user.js
const User = require('../../app/models/user')

class UserServices{
    static create(_id, _userName, _name){//static nos ayuda ha no crear objetios en la misma clase
        return new User(_id, _userName, _name, "Sin bio")
    }

    static getInfo(user){
        return Object.values(user);//Retornara los valores del objeto.
    }
    static updateUserUserName(user,yourUserName){
        user.setUsername = yourUserName;
    }
    static getAllUsernames(users){
        const usersUsernames = users.map( user => user._username)
        return usersUsernames
      }
}


module.exports = UserServices;
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
        return Object.values(user);//Object.values retornara un array con los valores correspondientes enumerables de un objeto
    }
    static updateUser(user,newUser){
        user.setUser = newUser;
    }
    static getAllUsernames(users){
        const usersUsernames = users.map( user => user._user)
        return usersUsernames
      }
      // map = creates a new array from calling a function for every array element.
}


module.exports = UserServices;
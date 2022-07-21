const User = require('../../app/models/user');
const UserServices = require('./../../app/models/userServices');

describe("Pruebas de UserServices", () =>{
    test("Prueba 1: Nueva instancia de clase UserService:", () => {
        const user = UserServices.create(1, "Mikelolp", 'Miguel');// Create se usa igual para instanciar que el new.
        expect(user._user).toBe('Mikelolp');
        expect(user._name).toBe('Miguel');
        expect(user._id).toBe(1);
        expect(user._bio).not.toBeUndefined();
    })
})
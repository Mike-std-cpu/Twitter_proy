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

    test("Prueba 2: Conseguir todos los user en una lista.", () =>{
        const Mike = UserServices.create(1, "Mikelolp", 'Miguel');
        const userInfoArray = UserServices.getInfo(Mike);
        expect(userInfoArray[0]).toBe(1);// por el object.values regresa las propiedades del objeto en un array.
        expect(userInfoArray[2]).toBe("Miguel")

    })
})
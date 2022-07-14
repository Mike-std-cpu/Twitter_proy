const User = require('./../../app/models/user')

describe("Prueba de JEST clase USER twitter", () =>{

    test("Pureba 1 de user Twitter :", () =>{
        const user1 = new User(1,'mikelolp','Miguel Andrade','My bio')
        expect(user1._id).toBe(1);
        expect(user1._user).toBe('mikelolp');
        expect(user1._name).toBe('Miguel Andrade');
        expect(user1._bio).toBe('My bio');
    })
})
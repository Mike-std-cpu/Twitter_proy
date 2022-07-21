const User = require('./../../app/models/user')

describe("Prueba de JEST clase USER twitter", () =>{

    test("Pureba 1 de user Twitter :", () =>{
        const user1 = new User(1,'mikelolp','Miguel Andrade','My bio')
        expect(user1._id).toBe(1);
        expect(user1._user).toBe('mikelolp');
        expect(user1._name).toBe('Miguel Andrade');
        expect(user1._bio).toBe('My bio');
    })

    test("Prueba 2 de introduccion de pruebas de user Twitter: ", () => {
        const user = new User(1,'mikelolp','Miguel Andrade','My bio');
        expect(user._dataCreated).not.toBeUndefined();// para que no mande un valor indefinido
        expect(user._lastUpdated).not.toBeUndefined();
        expect(user._id).toBe(1);
        expect(user._user).toBe('mikelolp');
        expect(user._name).toBe('Miguel Andrade');
        expect(user._bio).toBe('My bio');
    })

    test("Prueba 3 de getters y setters de clase user: ", () =>{
        const user = new User(1,'Mikelolp','Miguel Andrade','My bio'); 
        expect(user.getUser).toBe("Mikelolp");
        user.setBio = "New Bio";
        expect(user.getBio).toBe("New Bio");
    })
})
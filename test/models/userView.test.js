const User = require('../../app/models/user');
const UserView = require('../../app/models/userView');

describe ("Pruebas de Vistas de proyecto Twitter: ", () =>{
    test("Prueba 1: Envio de null al payload" ,() =>{
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/El payload no existe/);// toMatch sirve para comparar cadenas
        /*You can check strings against regular expressions with toMatch: */
        /* Comparadores como toBe, toEquals para numebrs */
        //DOCUMENTACION JEST :https://jestjs.io/docs/using-matchers#strings
    })

    test("Prueba 2: Retorno de un objeto 'error' cuando payload no tenga valores correctos", () =>{
        //const payload = {user: null, name: 12, id:"id"}
        const payload = {user:'MikeDirrty', name: 'Miguel', id: 100}
        const result = UserView.createUser(payload);
        //expect(result.error).toMatch(/El payload necesita tener valores validos/);
        expect(result.error).not.toBeUndefined();
        expect(payload.name).toContain("Miguel")
        expect(result.error).toMatch(/El payload necesita tener valores validos/)
     })
})
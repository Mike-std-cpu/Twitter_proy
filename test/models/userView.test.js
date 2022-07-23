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
})
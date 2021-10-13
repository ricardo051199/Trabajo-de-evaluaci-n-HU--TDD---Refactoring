import controladorDeAuto from "./controladorDeAuto";

describe("controlador de auto", () => {
    it("deberia devovler 'ingresa una cadena'", () => {
        expect(controladorDeAuto('')).toEqual('Ingrese una cadena');
    });
});
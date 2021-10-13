import {controladorDeAuto, validarCadena} from "./controladorDeAuto";

describe("controlador de auto", () => {
    it("deberia devovler 'ingresa una cadena'", () => {
        expect(controladorDeAuto('')).toEqual('Ingrese una cadena.');
    });
    it("deberia devovler 'error entrada'", () => {
        expect(controladorDeAuto('0,0/0,0aaaa')).toEqual('Error entrada.');
    });
});

describe("validar cadena", () => {
    it("deberia devovler true para la cadena '0,0/0,0a/aaaa'", () => {
        expect(validarCadena('0,0/0,0a/aaa')).toEqual(true);
    });
    it("deberia devovler true para cualquier cadena que cumpla el formato", () => {
        expect(validarCadena('9,8/7,6a/abcd')).toEqual(true);
    });
    it("deberia devolver false para la cadena '0,0/0,0a/aaa'", () => {
        expect(validarCadena('0,0/0,0aaaa')).toEqual(false);
    });
    it("deberia devovler false si no se le envia una dimension'", () => {
        expect(validarCadena('/0,0a/aaa')).toEqual(false);
    });
    it("deberia devovler false si no se le envia una posicion inicial", () => {
        expect(validarCadena('0,0//aaa')).toEqual(false);
    });
    it("deberia devovler false si no se le envia una serie de instrucciones", () => {
        expect(validarCadena('0,0/0,0a/')).toEqual(false);
    });
});
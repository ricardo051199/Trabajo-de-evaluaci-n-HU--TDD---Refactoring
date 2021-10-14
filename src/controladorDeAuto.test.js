import {controladorDeAuto, validarCadena, devolverDimension, devolvePosicionInicial, devolverOrientacion, devolverInstrucciones, ejecutarComandos} from "./controladorDeAuto";

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

describe("devolver dimension", () => {
    it("deberia devovler la dimension de la cadena '0,0/0,0a/aaa'", () => {
        expect(devolverDimension('0,0/0,0a/aaa')).toEqual([0, 0]);
    });
    it("deberia devovler la dimension de cualquier cadena", () => {
        expect(devolverDimension('100,17/0,0a/aaa')).toEqual([100, 17]);
    });
});

describe("devolver posicion inicial", () => {
    it("deberia devovler la posicion inicial de la cadena '0,0/0,0a/aaa'", () => {
        expect(devolvePosicionInicial('0,0/0,0a/aaa')).toEqual([0, 0]);
    });
    it("deberia devovler la posicion inicial de cualquier cadena", () => {
        expect(devolvePosicionInicial('100,17/17,1a/aaa')).toEqual([17, 1]);
    });
});

describe("devolver orientacion", () => {
    it("deberia devovler la orientacion de la cadena '0,0/0,0a/aaa'", () => {
        expect(devolverOrientacion('0,0/0,0a/aaa')).toEqual('a');
    });
    it("deberia devovler la orientacion de cualquier cadena", () => {
        expect(devolverOrientacion('100,17/0,0z/aaa')).toEqual('z');
    });
});

describe("devolver instrucciones", () => {
    it("deberia devovler la instrucciones de la cadena '0,0/0,0a/aaa'", () => {
        expect(devolverInstrucciones('0,0/0,0a/aaa')).toEqual('aaa');
    });
    it("deberia devovler la instrucciones de cualquier cadena", () => {
        expect(devolverInstrucciones('100,17/0,0a/abcd')).toEqual('abcd');
    });
});

describe("ejecutar comandos", () => {
    it("deberia ejecutar una instruccione 'i' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'n', 'i')).toEqual([[0, 0], 'O']);
    });
    it("deberia ejecutar una instruccione 'd' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'N', 'd')).toEqual([[0, 0], 'E']);
    });
    it("deberia ejecutar una instruccione 'a' con una orientacion hacia el norte", () => {
        expect(ejecutarComandos([0, 0], 'n', 'a')).toEqual([[0,1], 'n']);
    });
    it("deberia ejecutar una instruccione 'i' con cualquier orientacion", () => {
        expect(ejecutarComandos([0, 0], 'O', 'I')).toEqual([[0,0], 'S']);
    });
    it("deberia ejecutar una instruccione 'd' con cualquier orientacion", () => {
        expect(ejecutarComandos([0, 0], 's', 'D')).toEqual([[0,0], 'O']);
    });
});
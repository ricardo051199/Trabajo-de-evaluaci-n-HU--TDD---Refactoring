const formato = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/

function controladorDeAuto(cadena) {
  let salida;
  if (cadena) {
    let esValidoLaCadena = validarCadena(cadena);
    if(!esValidoLaCadena) salida = 'Error entrada.';
  }
  else salida = 'Ingrese una cadena.';
  return salida;
}

function validarCadena(cadena){
  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
  if(arregloDeCoincidencia) return true;
  else return false;
}

function devolverDimension(cadena){
  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
    let x = parseInt(arregloDeCoincidencia[1]);
    let y = parseInt(arregloDeCoincidencia[3]);
    return [x, y];
}

function devolverArregloDeCoincidencias(cadena){
  return cadena.match(formato)
}

function devolvePosicionInicial(cadena){
  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena);
  let x = parseInt(arregloDeCoincidencia[5]);
  let y = parseInt(arregloDeCoincidencia[7]);
  return [x,y];
}

function devolverOrientacion(cadena){
  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena, formato);
  let orientacion = arregloDeCoincidencia[8];
  return orientacion;
}

function devolverInstrucciones(cadena){
  let arregloDeCoincidencia = devolverArregloDeCoincidencias(cadena, formato);
  let orientacion = arregloDeCoincidencia[10];
  return orientacion;
}

function ejecutarComandos(posicion, orientacion, instruccion){
  if(orientacion == 'n' || orientacion == 'N'){
    if(instruccion == 'i' || instruccion == 'I') orientacion = 'O';
    else if(instruccion == 'd' || instruccion == 'D') orientacion = 'E';
    else if(instruccion == 'a'  || instruccion == 'A') posicion[1] = posicion[1] + 1;
  }
  else if(orientacion == 'o' || orientacion == 'O'){
    if(instruccion == 'i' || instruccion == 'I') orientacion = 'S';
    else if(instruccion == 'd' || instruccion == 'D') orientacion = 'N';
    else if(instruccion == 'a'  || instruccion == 'A') posicion[0] = posicion[0] - 1;
  }
  else if(orientacion == 's' || orientacion == 'S'){
    if(instruccion == 'i' || instruccion == 'I') orientacion = 'E';
    else if(instruccion == 'd' || instruccion == 'D') orientacion = 'O';
    else if(instruccion == 'a'  || instruccion == 'A') posicion[1] = posicion[1] - 1;
  }
  else if(orientacion == 'e' || orientacion == 'E'){
    if(instruccion == 'i' || instruccion == 'I') orientacion = 'N';
    else if(instruccion == 'd' || instruccion == 'D') orientacion = 'S';
    else if(instruccion == 'a'  || instruccion == 'A') posicion[0] = posicion[0] + 1;
  }
  return [posicion, orientacion];
}

export {controladorDeAuto, validarCadena, devolverDimension, devolvePosicionInicial, devolverOrientacion, devolverInstrucciones, ejecutarComandos};

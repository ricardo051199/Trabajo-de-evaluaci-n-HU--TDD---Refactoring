const formato = /^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/

function controladorDeAuto(cadena) {
  let salida;
  if (cadena) {
    let esValidoLaCadena = validarCadena(cadena);
    if(esValidoLaCadena) {
      let dimension = devolverDimension(cadena);
      let posicion = devolverPosicionInicial(cadena);
      let posicionInicial = devolverPosicionInicial(cadena);
      let orientacion = devolverOrientacion(cadena);
      let instrucciones = devolverInstrucciones(cadena)
      let posicionFinal = ejecutarComandos(posicion, orientacion, instrucciones);
      if(posicionFinal[0] >= [0,0] && posicionFinal[0] <= dimension){
        salida = ['Posicion inicial: ' + posicionInicial, 'Comandos: ' + instrucciones, 'Posicion final: ' + posicionFinal[0] + ' ' + posicionFinal[1]];
      }else salida = ['El auto se encuentra fuera del rango', '', ''];
    }else salida = ['Error entrada.', '', ''];
  }
  else salida = ['Ingrese una cadena.', '', ''];
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

function devolverPosicionInicial(cadena){
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

function ejecutarComandos(posicion, orientacion, instrucciones){
  for (var i = 0; i < instrucciones.length; i++){
    if(orientacion == 'n' || orientacion == 'N'){
      if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = 'O';
      else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = 'E';
      else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion[1] = posicion[1] + 1;
    }
    else if(orientacion == 'o' || orientacion == 'O'){
      if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = 'S';
      else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = 'N';
      else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion[0] = posicion[0] - 1;
    }
    else if(orientacion == 's' || orientacion == 'S'){
      if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = 'E';
      else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = 'O';
      else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion[1] = posicion[1] - 1;
    }
    else if(orientacion == 'e' || orientacion == 'E'){
      if(instrucciones[i] == 'i' || instrucciones[i] == 'I') orientacion = 'N';
      else if(instrucciones[i] == 'd' || instrucciones[i] == 'D') orientacion = 'S';
      else if(instrucciones[i] == 'a'  || instrucciones[i] == 'A') posicion[0] = posicion[0] + 1;
    }
  }
  return [posicion, orientacion];
}

export {controladorDeAuto, validarCadena, devolverDimension, devolverPosicionInicial, devolverOrientacion, devolverInstrucciones, ejecutarComandos};

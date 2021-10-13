function controladorDeAuto(cadena) {
  return 'Ingrese una cadena';
}

function validarCadena(cadena){
  let arregloDeCoincidencia = cadena.match(/^(\d*)(\,)(\d*)(\/)(\d*)(\,)(\d*)([a-zA-Z])(\/)([a-zA-z]\D*)$/);
  if(arregloDeCoincidencia) return true;
  else return false;
}

export {controladorDeAuto, validarCadena};

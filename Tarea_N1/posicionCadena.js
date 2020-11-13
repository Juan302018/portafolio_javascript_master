string = 'abcdefghijklmnñopqrstuvwxyz';

function posicion(str) {
if (string.includes(str)) {
	return string.indexOf(str);
	} else {
	console.log("No se encontro el carácter!");
	}
}

posicion('s');
 precioIva(precio)

function precioIva(precio) {
   var numPrecio = 0;   
   var iva = 19;
   var resultado = 0;
   precio = prompt("Ingrese precio");
   numPrecio = parseInt(precio);

   resultadoIva = numPrecio * iva/ 100 + numPrecio;
   console.log("El IVA del precio es: " + Math.floor(resultadoIva));
   alert("El IVA del precio es: " + Math.round(resultadoIva));
   return resultadoIva;
 }
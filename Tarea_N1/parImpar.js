  var recibeNumero = prompt("Introduce un número"); 

  var resultadoOpe = verificaParImpar(recibeNumero);

  function verificaParImpar(recibeNumero) { 
    if(recibeNumero % 2 === 0) { 
      return "par"; 
    } 
      else { return "impar"; 
    } 
  } 
 
   console.log("El número ", recibeNumero, " es ", resultadoOpe);
   alert("El número "+recibeNumero+ " es "+ resultadoOpe);
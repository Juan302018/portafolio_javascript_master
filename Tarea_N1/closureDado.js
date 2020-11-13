    function closureDado(nombre) {
      return function() {
        return nombre+' tiro un dado y salio '+Math.ceil(Math.random() * 6);
      }   
   } 

    var nuevoDado = closureDado('Juan');
    nuevoDado()


    ----------------------

  function closureDado(nombre) {
      return function() {
        var array = [nombre,' tiro un dado y salio ', Math.ceil(Math.random() * 6)];
        var iterarCiclo = function(value, key) {
         console.log("value: ", value,", key: ", key);
        }
          array.forEach(iterarCiclo)
      }  
   } 
    var nuevoDado = closureDado('Juan');
    nuevoDado()
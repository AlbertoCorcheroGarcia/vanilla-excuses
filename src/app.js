/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";

window.onload = function() {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });
  this.console.log("Hola desde el generador de excusas");

  //write your code here
  let generateExcuse = () => {
    let pronombre = ["El", "Un"];
    let sustantivo = ["perro", "gato", "conejo", "leon"];
    let verbo = ["se comio", "llevó", "pintó", "condujo"];
    let pronombre2 = ["el", "un", "las", "los"];
    let objeto = ["libro", "coche", "cuadro", "llaves"];
    //hago una lista de listas
    let listas = [pronombre, sustantivo, verbo, pronombre2, objeto];
    // declaro un array vacio para meterle el contenido mas tarde de los resultados de recorrer el array
    let frase = "";

    // hago un bucle para recorrerlo
    for (let index = 0; index < listas.length; index++) {
      //accedo a la posicion 0 del array que esta recorriendo dejo el valor en un array
      let x = listas[index];
      // saco un numero aleatorio de esa posicion del array y lo dejo en una variable
      let n = Math.floor(Math.random() * x.length);
      //cojo la  variable previamente creada con la posicion y el valor obtenido concateno la frase dejandolo en fraseCompleta
      frase = frase.concat(x[n], " ");
      //muestro el resultado por consola
      this.console.log(frase);
    }
    return frase;
  };
  /*
                  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
                  let sustantivoIndex = Math.floor(Math.random() * sustantivo.length);
                  let verboIndex = Math.floor(Math.random() * verbo.length);
                  let pronombre2Index = Math.floor(Math.random() * pronombre2.length);
                  let objetoIndex = Math.floor(Math.random() * objeto.length);
                  */
  /* return (
                      pronombre[pronombreIndex] + " " + sustantivo[sustantivoIndex] + " " + verbo[verboIndex] + " " + pronombre2[pronombre2Index] + " " + objeto[objetoIndex]
                    );
                  */
};
//

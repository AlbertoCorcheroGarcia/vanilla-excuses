/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

    let listas = [pronombre, sustantivo, verbo, pronombre2, objeto];
    //let total = (Math.floor(Math.random() * total.length)([pronombre, sustantivo, verbo, pronombre2, objeto]));

    for (let lista = 0; lista < listas.length; lista++) {
      Math.floor(Math.random() * listas);
      this.console.log(Math.floor(Math.random() * listas));
      //if (listas == a) {
      //}
      //this.console.log("Fail");
    }
    return listas;
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

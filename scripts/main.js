/*
const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola Mundo!";

//tipos de variables, "let" o "var" (recomiendable el uso de "let")
let nombreDeLaVariable = "Bob";
*/
/*


let helado = "chocolate";
if (helado === "chocolate") {
  alert("¡Sí, amo el helado de chocolate!");
} else {
  alert("Awwww, pero mi favorito es el de chocolate...");
}


function multiplica(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}
la sentencia return le dice al navegador que devuelva la variable resultado
 fuera de la función, para que esté disponible para su uso. Esto es
 necesario porque las variables definidas dentro de funciones, solo están
 disponibles dentro de esas funciones. Esto se conoce como «ámbito 
 (scope en inglés) de la variable». 


*/

let miImage = document.querySelector("img");
miImage.onclick = function(){
    let miSrc = miImage.getAttribute("src");
    if(miSrc === "images/imagen-prueba.jpg"){
        miImage.setAttribute("src", "images/3988.jpg");
    }
    else{
        miImage.setAttribute("src", "images/imagen-prueba.jpg")
    }
};

/* Para que la imagen cambie al hacr click

let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/imagen-prueba.jpg") {
    miImage.setAttribute("src", "images/3988.jpg");
  } else {
    miImage.setAttribute("src", "images/imagen-prueba.jpg");
  }
};
*/
//agarra los elementos del indes y los almacena en variables

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial," + miNombre;
}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} 
else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
}
  
miBoton.onclick = function () {
    estableceNombreUsuario();
  };
  
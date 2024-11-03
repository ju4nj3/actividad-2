var mostrarTodo = false;
var textoAdicional = document.getElementById("textoAdicional");
var linkMostrarOcultar = document.getElementById("linkMostrarOcultar");

function toggleText(){

    // Conmutamos el valor antes, dado que por defecto arranca con 'Seguir leyendo'    
    mostrarTodo = !mostrarTodo;    
    
    if (mostrarTodo) {
        textoAdicional.classList.remove("hidden");
        textoAdicional.classList.add("visible");
        linkMostrarOcultar.textContent = "Ocultar exceso de texto";
    } else {
        textoAdicional.classList.remove("visible");
        textoAdicional.classList.add("hidden");
        linkMostrarOcultar.textContent = "Seguir leyendo";
    }    
}

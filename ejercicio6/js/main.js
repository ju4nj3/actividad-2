function mostrarOcultarSeccion(link) {

    var seccion = link.previousElementSibling;

    if(seccion.classList.contains("hidden")) {
        seccion.classList.remove("hidden");
        seccion.classList.add("visible");
        link.textContent = "Ocultar contenidos";
    } else {
        seccion.classList.remove("visible");
        seccion.classList.add("hidden");        
        link.textContent = "Mostrar contenidos";        
    }    
}
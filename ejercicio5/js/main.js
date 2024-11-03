var lista = document.getElementById("lista");

function agregarElemento() {

    var numElementos = lista.children.length++;
    numElementos++;

    lista.innerHTML += `<li class="list-group-item">Elemento ${numElementos}</li>`;

}
var tareaIngresada = document.getElementById("ingreso")
let listaTareas = []
var checklist = document.getElementById("checklist")
const agregarTarea = document.getElementById('botonIngresar')
let lista = document.getElementById('list')


function AgregarTarea(){
    const crearLabel = document.createElement ('li')
    const checkbox = document.createElement('input')

    checkbox.setAttribute("type", "checkbox")
    
    listaTareas.push(tareaIngresada.value)
    listaTareas.forEach(function(tarea) {
        crearLabel.innerHTML = tarea
    });

    crearLabel.appendChild(checkbox)
    lista.appendChild(crearLabel)

}
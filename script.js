var tareaIngresada = document.getElementById("ingreso")
let listaTareas = []
let lista = document.getElementById('list')


function AdministrarTarea(){
    const crearLabel = document.createElement ('li')
    const checkbox = document.createElement('input')
    const crearDelete = document.createElement ('button')
    const span = document.createElement('span')
    let completas = []

    crearDelete.innerHTML = "Eliminar"
    completas.push(crearDelete)
    checkbox.setAttribute("type", "checkbox")
    
    listaTareas.push(tareaIngresada.value)
    listaTareas.forEach(function(tarea) {
        span.innerHTML = tarea
    });

    crearDelete.addEventListener("click", () => {
        lista.removeChild(crearLabel)
    })

    completas.forEach(function(tarea){
        crearDelete.innerHTML = "Eliminar"
        checkbox.setAttribute("type", "checkbox")
    });

    crearLabel.appendChild(checkbox)
    crearLabel.appendChild(span)
    crearLabel.appendChild(crearDelete)
    lista.appendChild(crearLabel)
}
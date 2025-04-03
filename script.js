var tareaIngresada = document.getElementById("ingreso")
let listaTareas = []
let lista = document.getElementById('list')




function AdministrarTarea(){
    const crearLabel = document.createElement ('li')
    const checkbox = document.createElement('input')
    const crearDelete = document.createElement ('button')
    const crearDate = document.createElement ('p')
    const span = document.createElement('span')
    let completas = []
    const fecha = Date.now()


    if (tareaIngresada.value=== "") return;
   
    crearDelete.innerHTML = "Eliminar"
    completas.push(crearDelete)
    checkbox.setAttribute("type", "checkbox")
   
    listaTareas.push(tareaIngresada.value)
    listaTareas.forEach(function(tarea) {
        span.innerHTML = tarea
        crearDate.innerHTML = new Date (fecha).toLocaleString("es-ES", { hour12: false, minute: "2-digit", hour: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" })
    });

   /* leerTareas.addEventListener("load", () => {

        const tarea = localStorage.getItem("miTarea");

    })*/

    localStorage.setItem("tareas", JSON.stringify(lista));

    crearDelete.addEventListener("click", () => {
        lista.removeChild(crearLabel)
        localStorage.setItem("tareas", JSON.stringify(lista));
    })


    completas.forEach(function(tarea){
        crearDelete.innerHTML = "Eliminar"
        checkbox.setAttribute("type", "checkbox")
    });

    

    crearLabel.appendChild(checkbox)
    crearLabel.appendChild(span)
    crearLabel.appendChild(crearDate)
    crearLabel.appendChild(crearDelete)
    lista.appendChild(crearLabel)
    tareaIngresada.value = "";
}

//window.onload()

function EliminarCompletadas() {
    let tareas = document.querySelectorAll("#list li");

    tareas.forEach((tarea) => {
        let checkbox = tarea.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            lista.removeChild(tarea);
        }
    });
}



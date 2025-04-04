var tareaIngresada = document.getElementById("ingreso")
let listaTareas = []
let lista = document.getElementById('list')

function AdministrarTarea(){
    const crearLabel = document.createElement ('li')
    const checkbox = document.createElement('input')
    const crearDelete = document.createElement ('button')
    const crearDate = document.createElement ('p')
    const span = document.createElement('span')
    const crearDateCompleta = document.createElement('p')
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

        const guardadas = localStorage.getItem("misTareas");
        guardadas.forEach(tarea => {
            const crearLabel = document.createElement('li');
            const checkbox = document.createElement('input');
            const crearDelete = document.createElement('button');
            const crearDate = document.createElement('p');
            const span = document.createElement('span');
            checkbox.setAttribute("type", "checkbox");
            span.innerHTML = tarea.descripcion;
            crearDate.innerHTML = new Date(tarea.fecha).toLocaleString("es-ES", {
                hour12: false,
                minute: "2-digit",
                hour: "2-digit",
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            });

    })*/

    const guardarTareas = () => localStorage.setItem("misTareas", JSON.stringify(lista));

    crearDelete.addEventListener("click", () => {
        lista.removeChild(crearLabel)
        
    })


    completas.forEach(function(tarea){
        crearDelete.innerHTML = "Eliminar"
        checkbox.setAttribute("type", "checkbox")
    });

    checkbox.addEventListener("change", () =>{
        var duration
        let listaDuration = []
        listaTareas.forEach(() => {
            let checkbox = document.querySelector("input[type='checkbox']");
            if (checkbox.checked) {
                crearDateCompleta.innerHTML = new Date().toLocaleString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  });
            }
            duration = crearDate.value - crearDateCompleta.value
            listaDuration += duration 
        });

    })

    crearLabel.appendChild(checkbox)
    crearLabel.appendChild(span)
    crearLabel.appendChild(crearDate)
    crearLabel.appendChild(crearDateCompleta)
    crearLabel.appendChild(crearDelete)
    lista.appendChild(crearLabel)
    tareaIngresada.value = "";
}



function EliminarCompletadas() {
    let tareas = document.querySelectorAll("#list li");

    tareas.forEach((tarea) => {
        let checkbox = tarea.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            lista.removeChild(tarea);
        }
    });
}



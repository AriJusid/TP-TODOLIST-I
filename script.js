var tareaIngresada = document.getElementById("ingreso")
let lista = document.getElementById('list')
let tareasCompletadas = [];
var divFlash = document.getElementById('flash');
let listaTareas = []
var listaString



const guardarTarea = () => {
    localStorage.setItem("misTareas", JSON.stringify(listaTareas));
    console.log(localStorage.getItem("misTareas"))
}

function RecargarTareas() {
    listaTareas = JSON.parse(localStorage.getItem("misTareas")) || []

    
}

function AdministrarTarea(){
    const crearLabel = document.createElement ('li')
    const checkbox = document.createElement('input')
    const crearDelete = document.createElement ('button')
    crearDelete.classList.add('deleteButon');

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
    guardarTarea()
    listaTareas.forEach(function(tarea) {
        span.innerHTML = tarea
        crearDate.innerHTML = new Date (fecha).toLocaleString("es-ES", { hour12: false, minute: "2-digit", hour: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" })
    });

    crearDelete.addEventListener("click", () => {
        lista.removeChild(crearLabel)
        guardarTarea()
    })


    completas.forEach(function(tarea){
        crearDelete.innerHTML = "🗑️"
        checkbox.setAttribute("type", "checkbox")
        guardarTarea()

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

        if (checkbox.checked) {
            let tiempoFin = Date.now();
            let duracion = tiempoFin - fecha;
            duracion = duracion / 1000;


            tareasCompletadas.push({ tarea: span.innerHTML, duracion: duracion });
            mostrarTareaFlash();

        }
        guardarTarea()
    });


    crearLabel.appendChild(checkbox)
    crearLabel.appendChild(span)
    crearLabel.appendChild(crearDate)
    crearLabel.appendChild(crearDateCompleta)
    crearLabel.appendChild(crearDelete)
    lista.appendChild(crearLabel)
    tareaIngresada.value = "";
}

function mostrarTareaFlash() {
    if (tareasCompletadas.length > 0) {
        let tareaMasRapida = tareasCompletadas.reduce((minTarea, tarea) => {
            if (tarea.duracion < minTarea.duracion) {
                return tarea;
            } else {
                return minTarea;
            }
           
        });

       divFlash.innerHTML =
            `La tarea más rápida fue: "${tareaMasRapida.tarea}" en ${tareaMasRapida.duracion.toFixed(2)} segundos.`;
    }
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


RecargarTareas()
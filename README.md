# TP-TODOLIST-I 

Este proyecto es una lista de tareas que permite agregar, eliminar y marcar tareas como completadas.

Características
- Agregar Tareas: Puedes agregar tareas a la lista de pendientes.

- Marcar Tareas como Completadas: Al marcar una tarea como completada, se registra la duración que tomó realizarla.

- Eliminar Tareas: Puedes eliminar tareas de la lista, ya sea completadas o no.

- Persistencia en el Navegador: Las tareas se guardan en localStorage para que no se pierdan después de recargar la página.

- Mostrar la Tarea más Rápida: Después de completar una tarea, la aplicación muestra cuál fue la tarea más rápida en completarse.

 - Eliminar Tareas Completadas: Permite eliminar todas las tareas completadas.


Funciones Principales:

- guardarTarea(): Guarda las tareas actuales en localStorage.

- AdministrarTarea(): Administra la creación y visualización de las tareas, permitiendo agregar tareas a la lista, marcar como completadas y eliminarlas.

- mostrarTareaFlash(): Muestra cuál fue la tarea más rápida en completarse en base al tiempo registrado.

- EliminarCompletadas(): Elimina todas las tareas marcadas como completadas.

Funcionalidad:
- Agregar Tarea: Cuando se ingresa una tarea en el campo de texto y se presiona "+" o se llama a la función correspondiente, la tarea se agrega a la lista. La tarea se guarda automáticamente en localStorage para persistir entre recargas de página.

- Marcar Tarea como Completada: Al marcar una tarea como completada, se guarda el tiempo que tomó completarla. La duración se calcula en segundos, y se almacena en el arreglo tareasCompletadas. Luego muestra la tarea más rápida en completarse.

- Eliminar Tareas: Se puede eliminar cualquier tarea haciendo clic en el botón de eliminar (ícono 🗑️) al lado de cada tarea. Esto eliminará la tarea tanto de la interfaz como de la lista guardada en localStorage.

- Eliminar Tareas Completadas: Se proporciona una opción para eliminar todas las tareas que están marcadas como completadas.


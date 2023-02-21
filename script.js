import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

(( ) => {  //IIFE (para proteger las funciones y que no esten al alcance del usuario)
    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => { // fucnion que crea una task
        evento.preventDefault(); //elimina la recarga por defecto del formulario
        const input = document.querySelector("[data-form-input]"); //captura el input
        const value = input.value; //captura el value del input
        const list = document.querySelector("[data-list]") //captura el ul (lista)
        const task = document.createElement("li"); //creo un nuevo elemento li
        task.classList.add("card"); //agrego una clase(card) al nuevo elemento li (le da formato)
        input.value = ""; // le asigna al value del input un string vacío para que el input quede en blanco

        const taskContent = document.createElement("div"); //crea un div contenedor 
        const titleTask = document.createElement("span"); //crea un span d
        titleTask.classList.add("task"); //agrega una clase al span
        titleTask.innerHTML = value; //le agrega contenido (value: valor del input) al span

        taskContent.appendChild(checkComplete()); //le agrega al div el icono check mediante la funcion checkComplete()
        taskContent.appendChild(titleTask); //agrega el span al div

        task.appendChild(taskContent) //agrego el div que contiene el value y el check dentro del li
        task.appendChild(deleteIcon());
        list.appendChild(task); //agrego un li(child de la ul) a la lista
    };

    btn.addEventListener("click", createTask); // agrega una escucha al boton cuando ocurre el evento click para que ejecute la funcion createTask (va sin parentesis)
}) ();
const checkComplete = ( ) => {
    const i = document.createElement("i"); //crea elemento i (icono) y lo guarda en una constante (i)
    i.classList.add("far", "fa-check-square", "icon"); //le coloca tres clases al i (icono)
    i.addEventListener("click", completeTask);
    return i;
}
const completeTask = (event) => {
    const elemento = event.target;
    elemento.classList.toggle("fas"); //no se pueden poner las clases juntas, no funciona 
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle("far");
}

// el IIFE solo se puede poner en el script general, no en los subscrpt porque sino no reconece las funciones que hay en ellos

export default checkComplete;
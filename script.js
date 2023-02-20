const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li"); //creo un nuevo elemento li
    task.classList.add("card"); //agrego una clase card al nuevo elemento li (formato)
    input.value = "";

    const content = ` 
    <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`

    task.innerHTML = content; //agrego contenido al elemiento li creado

    list.appendChild(task); //agrego un li(child de la ul) a la lista
    console.log(content);
};

console.log(btn);

btn.addEventListener("click", createTask);

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    console.log("crear tarea");
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
};

console.log(btn);

btn.addEventListener("click", createTask);

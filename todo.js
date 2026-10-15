const addInput= document.getElementById("addInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks= JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTask(taskText) {
    const li = document.createElement('li');
    /*ایجاد چک باکس*/
    const checkbox= document.createElement("input");
    checkbox.type= "checkbox";

    /*اضافه کردن کار جدید*/
    const span= document.createElement("span");
    span.textContent= taskText

    /*ساخت دکمه حذف */ 
    const deleteBtn= document.createElement("button");
    deleteBtn.textContent= "×";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.type="button";

    // حذف ردیف با کلیک روی دکمه
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    /*اضافه کردن ایتم ها به ردیف*/
    li.append(checkbox, span, deleteBtn);
    taskList.appendChild(li);

    checkbox.addEventListener("change", function() {
    li.classList.toggle("completed", checkbox.checked);
    });
}

tasks.forEach(function(taskText) {
    renderTask(taskText);
});


function addTask(){
    let taskText= addInput.value.trim();

    if(taskText===''){
        window.alert("کادر خالی است!");
        return;
    }

    tasks.push(taskText);
    saveTasks();
    
    renderTask(taskText);

    addInput.value= "";


}

addInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText ==="") {
        return;
    }
    const li = document.createElement("li");

    const taskspan = document.createElement("span");
    taskspan.textContent = taskText;

    const buttonContainer = document.createElement("div");

    const completeButton = document.createElement("button");
    completeButton.textContent = "complete";
    completeButton.addEventListener("click", function () {
        taskspan.classList.toggle("completed");
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", function (){
        li.remove();
    });


    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);
    
    li.appendChild(taskspan);
    li.appendChild(buttonContainer);

    taskList.appendChild(li);
    taskInput.value = "";
});
clearButton.addEventListener("click", function () {
    taskList.innerHTML = "";
});
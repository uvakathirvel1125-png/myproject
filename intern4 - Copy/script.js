let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const date = document.getElementById("taskDate");

    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    const task = {
        text: input.value,
        date: date.value,
        completed: false
    };

    tasks.push(task);
    input.value = "";
    date.value = "";

    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.innerHTML = `${task.text} <br><small>${task.date || ""}</small>`;
        
        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = () => toggleComplete(index);

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = () => editTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = () => deleteTask(index);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);

        list.appendChild(li);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    const newTask = prompt("Edit task:", tasks[index].text);
    if (newTask !== null) {
        tasks[index].text = newTask;
        displayTasks();
    }
}
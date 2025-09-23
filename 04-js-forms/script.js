let tasks = [
    {
        type: "Clean room",
        priority: 3
    },
    {
        type: "CSC-336 assignment 4",
        priority: 1
    },
    {
        type: "Schedule office hours",
        priority: 3
    },
    {
        type: "Apply to internships",
        priority: 3
    },
    {
        type: "FaceTime friends",
        priority: 5
    },


]

function getErrorDiv() {
    let err = document.querySelector("#form-error");
    if (!err) {
        const form = document.querySelector("#add-task-form");
        err = document.createElement("div");
        err.id = "form-error";
        err.style.color = "red";
        err.style.marginTop = "8px";
        form.appendChild(errqs);
    }
    return err;
}
function showError(msg) {
    const sel_error = getErrorDiv();
    sel_error.textContent = msg;
}
function clearError() {
    const sel_error = document.querySelector("#form-error");
    if (sel_error) {
        sel_error.textContent = "";
    }
}





function populateTaskInfoDiv() {
    let taskInfoDiv = document.querySelector("#all-task-info");

    taskInfoDiv.innerHTML = "";

    for (let task of tasks) {
        let taskHTML = createTaskDiv(task);
        taskInfoDiv.innerHTML += taskHTML;
    }
}

function createTaskDiv(task) {
    return `
        <div>
            <h2>${task.type}</h2>
            <div class='stats'>
                <div>priority: ${task.priority}</div>
            </div>
        </div>
    `;
}

let addTaskForm = document.querySelector("#add-task-form");
addTaskForm.addEventListener("submit", addNewTask);

populateTaskInfoDiv();

function addNewTask(e) {

    e.preventDefault();

    let typeInput = document.querySelector("#task-name").value;
    let priorityInput = document.querySelector("#task-priority").value;

    

    if (!typeInput) {
        showError("Please enter a task name.");
        return;
    }
    if (!priorityInput) {
        showError("Please enter a priority.");
        return;
    }



    let newTask = {
        type: typeInput,
        priority: priorityInput,
    }

    tasks.push(newTask);


    populateTaskInfoDiv();
}
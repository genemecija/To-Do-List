import { format } from "date-fns";
import Task from "./task";

const expandTask = (task = null) => {
  let taskDiv;
  if (task) {
    taskDiv = document.querySelector("#" + task.id + ".task");
  } else {
    taskDiv = document.querySelector("#newTaskDiv");
  }
  while (taskDiv.firstChild) {
    taskDiv.removeChild(taskDiv.firstChild);
  }

  let taskExpandedContainer = createTaskExpandedView(task);
  taskDiv.id = taskExpandedContainer.id;
  taskDiv.appendChild(taskExpandedContainer);
};

function collapseTask(task = null) {
  let taskDiv = document.querySelector("#" + task.id + ".task");
  while (taskDiv.firstChild) {
    taskDiv.removeChild(taskDiv.firstChild);
  }
  let taskCollapsed = createTaskCollapsedView(task);
  taskDiv.appendChild(taskCollapsed);
}

const createTaskCollapsedView = (task = null) => {
  // Generate Task Expander Button
  let taskExpander = document.createElement("div");
  taskExpander.classList.add("taskExpander");
  taskExpander.innerHTML = "+";

  // Generate Task Title
  let taskTitle = document.createElement("div");
  taskTitle.classList.add("taskTitle");
  taskTitle.innerHTML = task.title;

  let taskCollapsed = document.createElement("div");
  taskCollapsed.classList.add("taskCollapsed");
  taskCollapsed.id = task.id;
  taskCollapsed.appendChild(taskExpander);
  taskCollapsed.appendChild(taskTitle);
  taskCollapsed.addEventListener("click", () => {
    expandTask(task);
  });

  return taskCollapsed;
};

var handler;
const createTaskExpandedView = (_task = null) => {
  // Task Detail Container (expanded view)

  let task = new Object();
  var newTask = false;
  if (!_task) {
    let parentID = document.querySelector(".listDetailContainer").id;
    task = new Task(
      parentID,
      "New Title",
      "New Description",
      "2019-11-18",
      "New Category"
    );
    localStorage.setItem("tempTask", JSON.stringify(task));
    newTask = true;
  } else {
    task = _task;
  }

  let taskExpandedContainer = document.createElement("div");
  taskExpandedContainer.classList.add("taskExpandedContainer");
  taskExpandedContainer.id = task.id;

  let taskExpandedHeader = document.createElement("div");
  taskExpandedHeader.classList.add("taskExpandedHeader");
  let taskExpandedHeaderLeft = document.createElement("div");
  taskExpandedHeaderLeft.classList.add("taskExpandedHeaderLeft");
  taskExpandedHeaderLeft.id = task.id;

  // Task Collapser button within the header
  let taskCollapser = document.createElement("div");
  taskCollapser.classList.add("taskCollapser");
  taskCollapser.innerHTML = "-";
  taskExpandedHeaderLeft.addEventListener(
    "click",
    (handler = function() {
      collapseTask(task);
    })
  );

  let taskExpandedTitle = document.createElement("div");

  if (!newTask) {
    taskExpandedHeaderLeft.appendChild(taskCollapser);
  } else {
    taskExpandedTitle.setAttribute("style", "margin-left:8px");
  }

  // Task Title within the header
  taskExpandedTitle.classList.add("taskExpandedTitle");
  taskExpandedTitle.id = task.id;
  taskExpandedTitle.innerHTML = task.title;
  taskExpandedHeaderLeft.appendChild(taskExpandedTitle);

  // Button div and button creation
  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");

  let editButton = document.createElement("input");
  editButton.setAttribute("type", "button");
  editButton.setAttribute("value", "Edit...");
  editButton.id = task.id;
  editButton.setAttribute("style", "display:inline");
  editButton.addEventListener("click", () => {
    editTask(task);
  });
  let saveButton = document.createElement("input");
  saveButton.setAttribute("type", "button");
  saveButton.setAttribute("value", "Save");
  saveButton.id = task.id;
  saveButton.setAttribute("style", "display:none");
  saveButton.addEventListener("click", () => {
    saveTask(task);
  });
  let cancelButton = document.createElement("input");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("value", "Cancel");
  cancelButton.id = task.id;
  cancelButton.setAttribute("style", "display:none");
  cancelButton.addEventListener("click", () => {
    cancelSave(task);
  });
  let deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "Delete");
  deleteButton.id = task.id;
  deleteButton.setAttribute("style", "display:inline");
  deleteButton.addEventListener("click", () => {
    deleteTask(task);
  });

  taskExpandedHeader.appendChild(taskExpandedHeaderLeft);
  taskExpandedHeader.appendChild(buttonDiv);
  buttonDiv.appendChild(editButton);
  buttonDiv.appendChild(saveButton);
  buttonDiv.appendChild(cancelButton);
  buttonDiv.appendChild(deleteButton);

  // Task Detail section of the expanded Task Detail view
  let taskExpandedDetails = document.createElement("div");
  taskExpandedDetails.classList.add("taskExpandedDetails");
  let category = document.createElement("div");
  let dueDate = document.createElement("div");
  let description = document.createElement("div");

  category.classList.add("category");
  dueDate.classList.add("dueDate");
  description.classList.add("description");

  category.id = task.id;
  dueDate.id = task.id;
  description.id = task.id;

  let year = Number(task.dueDate.split("-")[0]);
  let month = Number(task.dueDate.split("-")[1]) - 1;
  let day = Number(task.dueDate.split("-")[2]);
  let date = new Date(year, month, day);

  category.innerHTML = "<u>Category</u>: " + task.category;
  dueDate.innerHTML = "<u>Due Date</u>: " + format(date, "LLL do, yyyy");
  description.innerHTML = "<u>Description</u>: " + task.description;

  taskExpandedContainer.appendChild(taskExpandedHeader);
  taskExpandedContainer.appendChild(taskExpandedDetails);
  taskExpandedDetails.appendChild(category);
  taskExpandedDetails.appendChild(dueDate);
  taskExpandedDetails.appendChild(description);

  return taskExpandedContainer;
};

const editTask = task => {
  let editButton = document.querySelector(`input[value='Edit...']#${task.id}`);
  let saveButton = document.querySelector(`input[value='Save']#${task.id}`);
  let cancelButton = document.querySelector(`input[value='Cancel']#${task.id}`);
  editButton.setAttribute("style", "display:none");
  saveButton.setAttribute("style", "display:inline");
  cancelButton.setAttribute("style", "display:inline");

  let taskExpandedHeaderLeft = document.querySelector(
    `#${task.id}.taskExpandedHeaderLeft`
  );
  taskExpandedHeaderLeft.removeEventListener("click", handler);

  let title = document.querySelector(`#${task.id}.taskExpandedTitle`);
  let category = document.querySelector(`#${task.id}.category`);
  let dueDate = document.querySelector(`#${task.id}.dueDate`);
  let description = document.querySelector(`#${task.id}.description`);

  let elements = [title, category, dueDate, description];

  for (let i in elements) {
    let elem = elements[i];
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }

    let inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.classList.add("textbox");
    inputBox.id = task.id;
    switch (elem) {
      case title:
        inputBox.classList.add("title");
        inputBox.setAttribute("value", task.title);
        break;
      case category:
        inputBox.classList.add("category");
        inputBox.setAttribute("value", task.category);
        break;
      case dueDate:
        inputBox.classList.remove("textbox");
        inputBox.classList.add("datePicker");
        inputBox.classList.add("dueDate");
        inputBox.setAttribute("type", "date");
        inputBox.setAttribute("value", task.dueDate);
        break;
      case description:
        inputBox = document.createElement("textarea");
        inputBox.classList.remove("textbox");
        inputBox.classList.add("textarea");
        inputBox.classList.add("description");
        inputBox.id = task.id;
        inputBox.innerHTML = task.description;
        break;
    }
    elem.appendChild(inputBox);
  }
};

const saveTask = task => {
  let allLists = JSON.parse(localStorage.getItem("allLists"));
  for (let l in allLists) {
    if (allLists[l].id == task.parentID) {
      // Pick the correct list
      let allTasks = allLists[l].taskList;
      let i = Object.keys(allTasks).indexOf(task.id);

      let existingTask = allTasks[Object.keys(allTasks)[i]];
      let newTask = false;
      if (!existingTask) {
        existingTask = task;
        newTask = true;
      }
      existingTask.title = document.querySelector(
        `#${task.id}.title.textbox`
      ).value;
      existingTask.category = document.querySelector(
        `#${task.id}.category.textbox`
      ).value;
      existingTask.dueDate = document.querySelector(
        `#${task.id}.dueDate.datePicker`
      ).value;
      existingTask.description = document.querySelector(
        `#${task.id}.textarea.description`
      ).value;

      let taskContainer = document.querySelector(`#${task.id}.task`);
      while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
      }
      taskContainer.appendChild(createTaskExpandedView(existingTask));

      if (newTask) {
        // New Task button section below all tasks
        taskContainer.parentNode.appendChild(createNewTaskDiv());

        allLists[l].taskList[existingTask.id] = existingTask;
      }
    }
  }
  localStorage.setItem("allLists", JSON.stringify(allLists));
};
const createNewTaskDiv = () => {
  // Creates a collapsed newTaskDiv
  let newTaskDiv = document.createElement("div");
  newTaskDiv.id = "newTaskDiv";
  newTaskDiv.classList.add("task");

  let addTaskDiv = document.createElement("div");
  addTaskDiv.innerHTML = "New Task...";
  addTaskDiv.classList.add("addTaskDiv");

  // Make the collapsed newTaskDiv clickable; for creating new tasks
  addTaskDiv.addEventListener("click", () => {
    expandTask();
    let tempTask = JSON.parse(localStorage.getItem("tempTask"));
    editTask(tempTask);
  });

  newTaskDiv.appendChild(addTaskDiv);

  return newTaskDiv;
};

const cancelSave = task => {
  let taskContainer = document.querySelector(`#${task.id}.task`);
  while (taskContainer.firstChild) {
    taskContainer.removeChild(taskContainer.firstChild);
  }
  taskContainer.appendChild(createTaskExpandedView(task));

  // Check if newTaskDiv is there, if not, add it to tasklist
  if (!document.querySelector("#newTaskDiv")) {
    let cancelledNewTask = document.querySelector(".tasksContainer").lastChild;
    let tasksContainer = cancelledNewTask.parentNode;
    tasksContainer.removeChild(cancelledNewTask);
    tasksContainer.appendChild(createNewTaskDiv());
  }
};

const deleteTask = task => {
  let allLists = JSON.parse(localStorage.getItem("allLists"));
  for (let l in allLists) {
    if (allLists[l].id == task.parentID) {
      // Pick the correct list
      let allTasks = allLists[l].taskList;
      let i = Object.keys(allTasks).indexOf(task.id);

      delete allTasks[Object.keys(allTasks)[i]];

      let taskContainer = document.querySelector(`#${task.id}.task`);
      taskContainer.parentNode.removeChild(taskContainer);
    }
  }
  localStorage.setItem("allLists", JSON.stringify(allLists));
  // Check if newTaskDiv is there, if not, add it to tasklist
  if (!document.querySelector("#newTaskDiv")) {
    let tasksContainer = document.querySelector(".tasksContainer");
    tasksContainer.appendChild(createNewTaskDiv());
  }
};

export { expandTask, createTaskCollapsedView, editTask, createNewTaskDiv };

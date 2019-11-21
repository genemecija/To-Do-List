import { createTaskCollapsedView, createNewTaskDiv } from "./taskMethods";
import List from "./list";
import showLists from "./appNav";

const displayTasksForList = _list => {
  var list = {};

  let allLists = JSON.parse(localStorage.getItem("allLists"));

  if (_list == "newList") {
    // If 'New Project...' is clicked
    list = new List("My New Project");
    allLists.push(list);
    localStorage.setItem("allLists", JSON.stringify(allLists));
  } else if (!_list) {
    // If no list is provided and no lists exist in localStorage, do below
    if (allLists.length == 0) {
      let listDiv = document.createElement("div");
      listDiv.classList.add("listDetailContainer");

      let header = document.createElement("div");
      header.classList.add("listHeader");

      let title = document.createElement("div");
      title.classList.add("listTitle");
      title.innerHTML = "No projects found. Create one.";
      header.appendChild(title);
      listDiv.appendChild(header);
      return listDiv;
    } else {
      list = allLists[0];
    }
  } else {
    //Get updated list object
    let allLists = JSON.parse(localStorage.getItem("allLists"));
    for (let i in allLists) {
      if (allLists[i].id == _list.id) {
        list = allLists[i];
      }
    }
  }

  // Clear currently displayed list
  try {
    let currentListDisplayed = document.querySelector(".listDetailContainer");
    currentListDisplayed.parentNode.removeChild(currentListDisplayed);
  } catch (error) {}

  // 
  let listDiv = document.createElement("div");
  listDiv.id = list.id;
  listDiv.classList.add("listDetailContainer");

  let header = document.createElement("div");
  header.id = list.id;
  header.classList.add("listHeader");

  let title = document.createElement("div");
  title.classList.add("listTitle");
  title.innerHTML = list.title;
  header.appendChild(title);

  let buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("listButtons");
  header.appendChild(buttonsDiv);

  let editButton = document.createElement("input");
  editButton.setAttribute("type", "button");
  editButton.setAttribute("value", "Edit...");
  editButton.id = list.id;
  editButton.setAttribute("style", "display:inline");
  editButton.addEventListener("click", () => {
    editList(list);
  });
  let saveButton = document.createElement("input");
  saveButton.setAttribute("type", "button");
  saveButton.setAttribute("value", "Save");
  saveButton.id = list.id;
  saveButton.setAttribute("style", "display:none");
  saveButton.addEventListener("click", () => {
    saveList(list);
  });
  let cancelButton = document.createElement("input");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("value", "Cancel");
  cancelButton.id = list.id;
  cancelButton.setAttribute("style", "display:none");
  cancelButton.addEventListener("click", () => {
    cancelSave(list);
  });
  let deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "Delete");
  deleteButton.id = list.id;
  deleteButton.setAttribute("style", "display:inline");
  deleteButton.addEventListener("click", () => {
    deleteList(list);
  });

  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(saveButton);
  buttonsDiv.appendChild(cancelButton);
  buttonsDiv.appendChild(deleteButton);

  let tasksContainerDiv = document.createElement("div");
  tasksContainerDiv.id = list.id;
  tasksContainerDiv.classList.add("tasksContainer");
  listDiv.appendChild(header);
  listDiv.appendChild(tasksContainerDiv);

  // header.appendChild(btnAddTask)

  try {
    // Format data from each task into a div and append to taskContainer
    const keys = Object.keys(list.taskList);
    for (let item in keys) {
      let task = list.taskList[keys[item]];

      let taskContainer = document.createElement("div");
      taskContainer.classList.add("task");
      taskContainer.id = task.id;

      let taskDiv = createTaskCollapsedView(task);
      taskDiv.id = task.id;

      taskContainer.appendChild(taskDiv);
      tasksContainerDiv.appendChild(taskContainer);
    }
  } catch (error) {}

  tasksContainerDiv.appendChild(createNewTaskDiv());

  return listDiv;
};
const editList = list => {
  let editButton = document.querySelector(`input[value='Edit...']#${list.id}`);
  let saveButton = document.querySelector(`input[value='Save']#${list.id}`);
  let cancelButton = document.querySelector(`input[value='Cancel']#${list.id}`);
  editButton.setAttribute("style", "display:none");
  saveButton.setAttribute("style", "display:inline");
  cancelButton.setAttribute("style", "display:inline");

  let title = document.querySelector(`.listTitle`);

  while (title.firstChild) {
    title.removeChild(title.firstChild);
  }

  let inputBox = document.createElement("input");
  inputBox.setAttribute("type", "text");
  inputBox.classList.add("textbox");
  inputBox.id = list.id;
  inputBox.classList.add("title");
  inputBox.setAttribute("maxlength", 35);

  title.appendChild(inputBox);
  inputBox.focus();
  inputBox.setAttribute("value", list.title);
};

const saveList = list => {
  let allLists = JSON.parse(localStorage.getItem("allLists"));
  for (let l in allLists) {
    if (allLists[l].id == list.id) {
      // Pick the correct list
      let title = document.querySelector(`.listTitle`);
      let newTitle = document.querySelector(`#${list.id}.title`).value;
      allLists[l].title = newTitle;
      title.innerHTML = newTitle;
    }
  }
  localStorage.setItem("allLists", JSON.stringify(allLists));
  let appNav = document.querySelector(".appNav");
  appNav.appendChild(showLists());
};

const cancelSave = list => {
  let title = document.querySelector(`.listTitle`);
  title.innerHTML = list.title;

  let editButton = document.querySelector(`input[value='Edit...']#${list.id}`);
  let saveButton = document.querySelector(`input[value='Save']#${list.id}`);
  let cancelButton = document.querySelector(`input[value='Cancel']#${list.id}`);
  editButton.setAttribute("style", "display:inline");
  saveButton.setAttribute("style", "display:none");
  cancelButton.setAttribute("style", "display:none");
};

const deleteList = list => {
  let allLists = JSON.parse(localStorage.getItem("allLists"));
  for (let l in allLists) {
    if (allLists[l].id == list.id) {
      // Pick the correct list
      allLists.splice(l, 1);
    }
  }
  localStorage.setItem("allLists", JSON.stringify(allLists));

  let appNav = document.querySelector(".appNav");
  let appContent = document.querySelector(".appContent");

  while (appNav.firstChild) {
    appNav.removeChild(appNav.firstChild);
  }
  while (appContent.firstChild) {
    appContent.removeChild(appContent.firstChild);
  }
  appNav.appendChild(showLists());
  appContent.appendChild(displayTasksForList());
};

export default displayTasksForList;

import displayTasksForList from "./listMethods";

// Shows available lists in a Lists section within the app nav section
const showLists = () => {
  try {
    let listsDisplay = document.querySelector(".listsDisplay");
    listsDisplay.parentNode.removeChild(listsDisplay);
  } catch (error) {}

  let listsDisplay = document.createElement("div");
  listsDisplay.classList.add("listsDisplay");

  let listsDisplayHeader = document.createElement("div");
  listsDisplayHeader.classList.add("listsDisplayHeader");

  let listsDisplayContents = document.createElement("div");
  listsDisplayContents.classList.add("listsDisplayContents");

  listsDisplayHeader.innerText = "Projects";
  listsDisplay.appendChild(listsDisplayHeader);
  listsDisplay.appendChild(listsDisplayContents);

  let appContent = document.querySelector(".appContent");

  let allLists = JSON.parse(localStorage.getItem("allLists"));
  allLists.forEach(list => {
    let listDiv = document.createElement("div");
    listDiv.id = list.id;
    listDiv.classList.add("nav_list");
    listDiv.innerHTML = list.title;
    listDiv.addEventListener("click", () => {
      let freshLists = JSON.parse(localStorage.getItem("allLists"));
      freshLists.forEach(l => {
        if ((l.id = listDiv.id)) {
          appContent.appendChild(displayTasksForList(l));
        }
      });
    });
    listsDisplayContents.appendChild(listDiv);
  });

  let newProjectDiv = document.createElement("div");
  newProjectDiv.classList.add("newProjectDiv");

  let newProject = document.createElement("input");
  newProject.classList.add("newProject");
  newProject.setAttribute("type", "button");
  newProject.setAttribute("value", "New Project...");
  newProjectDiv.appendChild(newProject);

  newProject.addEventListener("click", () => {
    appContent.appendChild(displayTasksForList("newList"));
    let appNav = document.querySelector("div.appNav");
    appNav.appendChild(showLists());
  });

  listsDisplay.appendChild(newProjectDiv);

  return listsDisplay;
};

export default showLists;

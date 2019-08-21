import Task from './taskMethods'
import List from './listMethods'

const displayList = (list) => {
    let listDiv = document.createElement('div');
    listDiv.id = list.id;
    listDiv.classList.add('list')

    let headerDiv = document.createElement('div');
    headerDiv.id = list.id;
    headerDiv.classList.add('listHeader')
    let tasksContainerDiv = document.createElement('div');
    tasksContainerDiv.id = list.id;
    tasksContainerDiv.classList.add('tasksContainer')
    listDiv.appendChild(headerDiv)
    listDiv.appendChild(tasksContainerDiv)

    let btnAddTask = document.createElement('input')
    btnAddTask.setAttribute('type', 'button')
    btnAddTask.setAttribute('value', 'Add Task')
    btnAddTask.id = list.id;
    

    btnAddTask.addEventListener('click', () => {
        // Temp: Adding new task manually; future will have dialog show for user to create new task
        let newTask = new Task('testDesc', 'Today', 'Event')
        
        list.taskList[newTask.id] = newTask
        
        // const currentListDiv = document.querySelector(`div #${list.id}`)
        while (tasksContainerDiv.firstChild) {
            tasksContainerDiv.removeChild(tasksContainerDiv.firstChild)
        }
        
        const keys = Object.keys(list.taskList)
        for (let item in keys) {
            let task = list.taskList[keys[item]]
            console.log(task);
            let taskDiv = document.createElement('div');
            taskDiv.id = task.id
            taskDiv.classList.add('task')
            taskDiv.innerText = task.id
            tasksContainerDiv.appendChild(taskDiv)
        }
    })
    headerDiv.innerText = list.title
    headerDiv.appendChild(btnAddTask)


    const keys = Object.keys(list.taskList)
    for (let item in keys) {
        let task = list.taskList[keys[item]]
        let taskDiv = document.createElement('div');
        taskDiv.id = task.id
        taskDiv.classList.add('task')
        taskDiv.innerText = task.id
        tasksContainerDiv.appendChild(taskDiv)
    }
    

    return listDiv
}

export default displayList
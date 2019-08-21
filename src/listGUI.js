import Task from './taskMethods'
import List from './listMethods'

const createListGUI = (listID) => {
    let list = document.createElement('div');
    list.id = listID;
    list.classList.add('list')

    let btnAddTask = document.createElement('input')
    btnAddTask.setAttribute('type', 'button')
    btnAddTask.setAttribute('value', 'Add Task')
    btnAddTask.id = listID;
    
    const l = List.getListForListID(listID)
    btnAddTask.addEventListener('click', () => {
        let blah = new Task('testDesc', 'Today', 'Event')
        
        l.addTask(blah)
    })
    list.appendChild(btnAddTask)

    let msg = ''
    for (let item in l.taskList) {
        msg += l.taskList[item].description
        msg += l.taskList[item].dueDate
        msg += l.taskList[item].category
    }
    list.innerText = list.title

    return list
}

export default createListGUI
import List from './listMethods'
import Task from './taskMethods'
import createListGUI from './listGUI'

let list1 = new List('Fruits')

let div = createListGUI(list1.id)

let blah = new Task('testDesc', 'Today', 'Event')
list1.taskList.push(blah)

let msg = ''
for (let item in list1.taskList) {
    msg += list1.taskList[item].description
    msg += list1.taskList[item].dueDate
    msg += list1.taskList[item].category
}
div.innerText = list1.title + ' ' + msg


document.querySelector('body').appendChild(div)
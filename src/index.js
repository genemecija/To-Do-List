import List from './listMethods'
import Task from './taskMethods'
import createListGUI from './listGUI'

let list1 = new List('Fruits')
let blah = new Task('testDesc', 'Today', 'Event')
list1.taskList.push(blah)
let blah1 = new Task('testDesc1', 'Today1', 'Event1')
list1.taskList.push(blah1)

let list2 = new List('Vegetables')
let blah2 = new Task('vegDesc', 'Tomorrow', 'Birthday')
list2.taskList.push(blah2)


let all = List.getAllLists()

for (let i in all) {
    let msg = ''
    let div = createListGUI(all[i].id)
    for (let item in all[i].taskList) {
        msg += all[i].taskList[item].description;
        msg += all[i].taskList[item].dueDate;
        msg += all[i].taskList[item].category;
    }
    div.innerText = all[i].taskList.title + ' ' + msg
    document.querySelector('body').appendChild(div)
}



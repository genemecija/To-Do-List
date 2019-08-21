import List from './listMethods'
import Task from './taskMethods'
import displayList from './listGUI'

let allLists = []

let list1 = new List('Fruits')
let blah = new Task('testDesc', 'Today', 'Event')
list1.taskList[blah.id] = blah
let blah1 = new Task('testDesc1', 'Today1', 'Event1')
list1.taskList[blah1.id] = blah1

let list2 = new List('Vegetables')
let blah2 = new Task('vegDesc', 'Tomorrow', 'Birthday')
list2.taskList[blah2.id] = blah2

allLists.push(list1)
allLists.push(list2)

for (let i in allLists) {
    let div = displayList(allLists[i])
    
    document.querySelector('body').appendChild(div)
}
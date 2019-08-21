import generateGuid from './guid';

class List {
    constructor(title) {
        this.title = title
        this.taskList = {}
        this.id = generateGuid()
    }

    // static getTaskForTaskID(taskID) {
    //     for (let index in this.taskList) {
    //         if (this.taskList[index].id == taskID) {
    //             return this.taskList[index]
    //         }
    //     }
    // }
    // static getListForListID(listID) {
    //     let localAll = allLists
    //     for (let i in localAll) {
    //         if (localAll[i].id == listID) {
    //             return localAll[i]
    //         }
    //     }
    // }
    static addTask(task) {
        this.taskList.push(task)
    }
    static deleteTask(task) {
        this.taskList.splice(task,1)
    }
    // static moveTaskToAnotherList(taskID, listID) {
    //     const task = this.getTaskForTaskID(taskID)
    //     this.getListForListID(listID).addTask(task)
    //     this.deleteTask(this.getTaskForTaskID(task))
    // }   
}



export default List
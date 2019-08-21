import generateGuid from './guid';

class Task {
    constructor (description, dueDate, category) {
        this.id = generateGuid()
        this.description = description;
        this.dueDate = dueDate;
        this.category = category;
        this.completionStatus = false;
    }

    static setDescription(description) {
        this.description = description;
    }

    static setDueDate(date) {
        // do stuff
    }

    static toggleCompletionStatus() {
        this.completionStatus = !this.completionStatus;
    }   
}

export default Task
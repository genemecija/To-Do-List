import generateGuid from './guid';

class Task {
    constructor (parentID, title, description, dueDate, category) {
        this.id = generateGuid();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.category = category;
        this.completionStatus = false;
        this.parentID = parentID
    }
}

export default Task
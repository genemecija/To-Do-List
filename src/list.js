import generateGuid from "./guid";

class List {
  constructor(title) {
    this.title = title;
    this.taskList = {};
    this.id = generateGuid();
  }
}

export default List;

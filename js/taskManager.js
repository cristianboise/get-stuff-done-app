class TaskManager  {
  constructor (currentId) {
    this.tasks = [];
    this.currentId = 0;
  }
addTask(name, description, assignedTo, dueDate, status) {
  const task = {
    id: this.currentId++,
    name: name,
    description: description,
    assignedTo: assignedTo,
    dueDate: dueDate,
    status: 'ToDo',
  };
  
    this.tasks.push(task);
    console.log(this.tasks);
}

};


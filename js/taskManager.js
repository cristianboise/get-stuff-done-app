class TaskManager  {
  constructor (currentId) {
    this.tasks = [];
    this.currentId = 0;
  }
  addTask(taskName, description, assignedTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      taskName: taskName,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: 'ToDo',
    };

      this.tasks.push(task);
      console.log(this.tasks);
  }

};
const newTask = new TaskManager()

let submitForm = document.getElementById('submit-form');
submitForm.addEventListener('submit', () => {
  newTask.addTask(
    document.getElementByID("taskName").value,
    document.getElementByID("description").value,
    document.getElementByID("assignedTo").value,
    document.getElementByID("dueDate").value
})


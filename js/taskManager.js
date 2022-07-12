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

let submitForm = document.getElementById('submitButton');
console.log(document.getElementById('submitButton'))
submitForm.addEventListener('click', (event) => {
    event.preventDefault();
    // form validation
    if ((document.getElementById("taskName").value !== '') &&
      (document.getElementById("description").value !== '') &&
      (document.getElementById("assignedTo").value !== '') &&
      (document.getElementById("dueDate").value !== '')) {
      newTask.addTask(
        document.getElementById("taskName").value,
        document.getElementById("description").value,
        document.getElementById("assignedTo").value,
        document.getElementById("dueDate").value
      )
      // clear the fields for new task submission
      document.getElementById("taskName").value = ''
      document.getElementById("description").value = ''
      document.getElementById("assignedTo").value = ''
      document.getElementById("dueDate").value = ''
    } else {
      alert('Form is either incomplete or invalid.  Please try again.')
    }
  }
)


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
  }
};
// make new instance of the TaskManager to store the tasks array and .addTask() method
const newTask = new TaskManager()
// submit button functionality
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let taskNameValue = document.getElementById("taskName").value
    let descriptionValue = document.getElementById("description").value
    let assignedToValue = document.getElementById("assignedTo").value
    let dueDateValue = document.getElementById("dueDate").value
    // form validation
    if ((taskNameValue !== '') && (descriptionValue !== '') &&
      (assignedToValue !== '') && (dueDateValue !== '')) {
      newTask.addTask(
        taskNameValue,
        descriptionValue,
        assignedToValue,
        dueDateValue
      )
      console.log(newTask.tasks)
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


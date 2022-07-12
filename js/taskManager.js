const createTaskHtml = (taskName, description, assignedTo, dueDate, status) => {
  const html = `
    <li class="list-group-item">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${taskName}</h5>
            <p>${description}</p>
            <p class="font-weight-bold">${dueDate}</p>
            <p class="font-weight-bold">Owner: <span class="font-weight-normal">${assignedTo}</span></p>
            <button type="button" class="btn delete-button btn-danger">Delete</button>
            <button type="button" class="btn done-button btn-success visible">${status}</button>
        </div>
      </div>
    </li>
  `
  return html;
}
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
  render(){
    let tasksHtmlList = [];
    this.tasks.forEach((task) => {
      let newDate = new Date(task.dueDate);
      let formattedDate = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
      let taskHtml = createTaskHtml(task.taskName, task.description, task.assignedTo, formattedDate, task.status);
      tasksHtmlList.push(taskHtml);
    })
    tasksHtmlList.forEach(() => {
      document.getElementById("taskList").innerHTML = tasksHtmlList;
    })
    let tasksHtml = tasksHtmlList.join('\n');

    document.getElementById('taskList').innerHTML = tasksHtml;
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


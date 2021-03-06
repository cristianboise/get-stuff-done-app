const createTaskHtml = (id, taskName, description, assignedTo, dueDate, status) => {
  const html = `
    <li class="list-group-item" data-task-id="${id}">
      <div class="card border-0" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${taskName}</h5>
            <p>${description}</p>
            <p class="font-weight-bold">Due: ${dueDate}</p>
            <p class="font-weight-bold">Owner: <span class="font-weight-normal">${assignedTo}</span></p>
            <button type="button" class="btn delete-button btn-danger">Delete</button>
            <button type="button" class="btn done-button btn-success">Mark as done</button>
            <div class="my-3 bg-primary text-white text-center">${status}</div>
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
  deleteTask(taskId) {
    const newTasks = [];
    for (let i = 0 ; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
      this.tasks = newTasks;
  }
  getTaskById(taskId) {
    let foundTask;
    this.tasks.forEach((task) => {
      if(task.id === taskId) {
        foundTask = task;
      }
    })
    return foundTask;
  }
  render(){
    let tasksHtmlList = [];
    this.tasks.forEach((task) => {
      let newDate = new Date(task.dueDate);
      let formattedDate = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
      let taskHtml = createTaskHtml(task.id, task.taskName, task.description, task.assignedTo, formattedDate, task.status);
      tasksHtmlList.push(taskHtml);
    })
    tasksHtmlList.forEach(() => {
      document.getElementById("taskList").innerHTML = tasksHtmlList;
    })
    let tasksHtml = tasksHtmlList.join('\n');

    document.getElementById('taskList').innerHTML = tasksHtml;
  }
  save(){
    console.log('save fired');
    let tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    let currentId = JSON.stringify(this.currentId);
    localStorage.setItem('currentId', currentId);
    console.log(tasksJson);
    console.log(currentId);
  }
  load(){
    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      this.tasks = JSON.parse(tasksJson);
    }
    if (localStorage.getItem('currentId')) {
      const currentId = localStorage.getItem('currentId');
      this.currentId = Number(currentId);
    }
  };
};
// make new instance of the TaskManager to store the tasks array and .addTask() method
const newTask = new TaskManager();
newTask.load();
newTask.render();

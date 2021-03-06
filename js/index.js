document.getElementById("submit-form").addEventListener("submit", function(event) {

        event.preventDefault();
        document.getElementById("AlertMessage").style.display = 'none';
        console.log('Working!');
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
        newTask.save();
        console.log(newTask.tasks)
        // clear the fields for new task submission
        document.getElementById("taskName").value = ''
        document.getElementById("description").value = ''
        document.getElementById("assignedTo").value = ''
        document.getElementById("dueDate").value = ''
        } else {
            // alert('Form is either incomplete or invalid.  Please try again.')
            let alertList = [];
            if (assignedToValue  === "") {
                alertList.push('Assigned To')
            }
            if (dueDateValue  === "") {
                alertList.push('Due Date')
            }
            if (taskNameValue  === "") {
                alertList.push('Task Name')
            }
            if (descriptionValue  === "") {
                alertList.push('Description')
            }
            alertList = alertList.join(", ");
            document.getElementById("AlertMessage").style.display = 'block';
            document.getElementById("AlertMessage").innerHTML = `The following fields are required: ${alertList}`
        }
        newTask.render();
    });

let tasksList = document.querySelector('#taskList');
tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button') ) {
        let taskCard = event.target.parentElement.parentElement.parentElement;
        let taskId = parseInt(taskCard.getAttribute("data-task-id"));
        let task = newTask.getTaskById(taskId);
        task.status = "Done";
        newTask.save();    
        newTask.render();
        // console.log('task card:', taskCard);
    }
    if (event.target.classList.contains('delete-button')){
        let parentTask = event.target.parentElement.parentElement.parentElement;
        let taskId = parseInt(parentTask.getAttribute("data-task-id"));
        newTask.deleteTask(taskId);
        newTask.save();    
        newTask.render();
    }
})
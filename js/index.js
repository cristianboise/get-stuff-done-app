document.getElementById("submit-form").addEventListener("submit", function(event) {

        event.preventDefault();
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
        console.log(newTask.tasks)
        // clear the fields for new task submission
        document.getElementById("taskName").value = ''
        document.getElementById("description").value = ''
        document.getElementById("assignedTo").value = ''
        document.getElementById("dueDate").value = ''
        } else {
            alert('Form is either incomplete or invalid.  Please try again.')
        }
        newTask.render();
    });
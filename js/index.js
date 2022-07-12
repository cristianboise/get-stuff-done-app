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
        console.log(newTask.tasks)
        // clear the fields for new task submission
        document.getElementById("taskName").value = ''
        document.getElementById("description").value = ''
        document.getElementById("assignedTo").value = ''
        document.getElementById("dueDate").value = ''
        } else {
            // alert('Form is either incomplete or invalid.  Please try again.')
            let alertList = [];
            if (taskNameValue  === "") {
                alertList.push('taskname')
            }
            if (descriptionValue  === "") {
                alertList.push('description')
            }
            if (assignedToValue  === "") {
                alertList.push('assignedTo')
            }
            if (dueDateValue  === "") {
                alertList.push('dueDate')
            }
            alertList = alertList.join(", ");
            document.getElementById("AlertMessage").style.display = 'block';
            document.getElementById("AlertMessage").innerHTML = `The following fields are required: ${alertList}`
        }
      newTask.render();
    });


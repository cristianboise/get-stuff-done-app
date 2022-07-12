document.getElementById("submit-form").addEventListener("submit", function(event) {

        console.log('Working!');
        event.preventDefault();
        newTask.addTask();
        newTask.render();
    });
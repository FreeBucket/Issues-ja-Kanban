document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document,getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        document.getElementById('taskList').appendChild(li);

        // Tyhjennä syötekenttä
        taskInput.value = "";
    } else {
        alert("Syötä tehtävä ennen lisäystä.");
    }
});

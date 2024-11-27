document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('numeroc');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');

    // Lataa tehtävät localStoragesta, jos niitä on tallennettu
    loadTasks();

    // Lisää uusi tehtävä
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const task = {
                text: taskText
            };
            
            // Lisää tehtävä listalle
            addTaskToList(task);

            // Tallenna tehtävä localStorageen
            saveTaskToLocalStorage(task);

            // Tyhjennä syötekenttä
            taskInput.value = "";
        } else {
            alert("Syötä tehtävä ennen lisäystä.");
        }
    });

    // Lisää tehtävä listaan
    function addTaskToList(task) {
        const li = document.createElement('li');
        li.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Poista';
        deleteButton.classList.add('deleteButton');

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Poista tehtävä painikkeen klikkauksella
        deleteButton.addEventListener('click', function() {
            li.style.animation = "fadeOut 0.3s forwards";
            setTimeout(() => {
                li.remove();
                removeTaskFromLocalStorage(task);
            }, 300);
        });

        // Kuvaus animaatio
        li.style.animation = "slideIn 0.5s forwards";
    }

    // Tallenna tehtävä localStorageen
    function saveTaskToLocalStorage(task) {
        const tasks = getTasksFromLocalStorage();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Poista tehtävä localStoragesta
    function removeTaskFromLocalStorage(task) {
        let tasks = getTasksFromLocalStorage();
        tasks = tasks.filter(t => t.text !== task.text);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Lataa tehtävät localStoragesta
    function loadTasks() {
        const tasks = getTasksFromLocalStorage();
        tasks.forEach(task => addTaskToList(task));
    }

    // Hae tehtävät localStoragesta
    function getTasksFromLocalStorage() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }
});

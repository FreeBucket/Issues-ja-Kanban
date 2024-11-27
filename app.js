document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addTaskButton').addEventListener('click', function() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Poista';
            deleteButton.classList.add('deleteButton');
            
            // Lisää poista-painike listan kohtaan
            li.appendChild(deleteButton);

            // Lisää tehtävä listaan
            document.getElementById('numeroc').appendChild(li);

            // Kuuntelija poista-painikkeelle
            deleteButton.addEventListener('click', function() {
                li.remove();
            });

            // Tyhjennä syötekenttä
            taskInput.value = "";
        } else {
            alert("Syötä tehtävä ennen lisäystä.");
        }

        
// Funktio tallentamaan tehtävät localStorageen
function saveTasks() {
  const tasks = [];
  
  // Käydään läpi kaikki listan kohteet ja tallennetaan niiden tekstit
  for (let task of taskList.children) {
    tasks.push(task.textContent);
  }

  // Tallennetaan tehtävät localStorageen JSON-muodossa
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Funktio lataamaan tehtävät localStoragesta
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);

    // Lisätään tallennetut tehtävät listalle
    tasks.forEach(function(taskText) {
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
      taskList.appendChild(newTask);
    });
  }
}


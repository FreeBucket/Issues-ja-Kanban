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
                li.style.animation = "fadeOut 0.3s forwards";
                setTimeout(() => li.remove(), 300); // Poistaa tehtävän animaation jälkeen
            });

            // Tyhjennä syötekenttä
            taskInput.value = "";
        } else {
            alert("Syötä tehtävä ennen lisäystä.");
        }
    });
});


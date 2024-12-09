{
  let input = document.getElementById("taskInput");
  let ul = document.getElementById("tasks");
  let allTasks;
  if (localStorage.Tasks != null) {
    allTasks = JSON.parse(localStorage.Tasks);
  } else {
    allTasks = [];
  }
  // Create And save the tasks to local storage
  function createTask() {
    if (!input.value) return;
    let task = {
      mainTask: input.value,
      isDone: false,
    };
    console.log(task);
    allTasks.push(task);
    localStorage.setItem("Tasks", JSON.stringify(allTasks));
    input.value = "";
    showData();
  }
  // add the tasks to the UI
  function showData() {
    let list = "";
    allTasks.forEach((task, index) => {
      list += `
                <li ${task.isDone ? 'class="done"' : ""}>
                        ${task.mainTask}
                        <div class='task-actions'>
                            <button id="del" onclick="remove(${index})">X</button>
                            <input type="checkbox" class='check-box'
                                ${task.isDone ? "checked" : ""} 
                                onclick="doneTask(${index}, this)">
                        </div>
                    </li>`;
    });
    ul.innerHTML = list;
  }

  // Delete tasks and set the new value to the local storage
  function remove(index) {
    allTasks.splice(index, 1);
    localStorage.Tasks = JSON.stringify(allTasks);
    showData();
  }

  // Make as done
  function doneTask(index, checkbox) {
    // Toggle isDone property based on checkbox state
    allTasks[index].isDone = checkbox.checked;

    // Save updated tasks to localStorage
    localStorage.Tasks = JSON.stringify(allTasks);
    // Re-render the task list to apply the "done" class
    showData();
  }
  // Show  data on first render
  showData();
}

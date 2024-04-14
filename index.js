const taskManager = require('./task'); //importing modules from task.js
 
// Adding tasks
const task1 = taskManager.addTask({ TaskId: 'Task 1', description: 'Create a To Do List'});

const task2 = taskManager.addTask({ TaskId: 'Task 2', description: 'Learn DSA'});

const task3 = taskManager.addTask({ TaskId: 'Task 3', description: 'React Project'});

// Displaying all the available tasks
console.log("Task Details :- \n")
console.log(taskManager.displayTasks());

// updating a task in the task maanger
const updatedTask = { TaskId: 'Updated Task 2', description: 'Learn DSA with Web dev'};
taskManager.updateTask(task2, updatedTask);

// displaying tasks after updating the task
console.log("Task after updation :- \n")
console.log(taskManager.displayTasks());

// deleting the last task from the taskManager
// taskManager.deleteLastTask();
taskManager.deleteTask(task1);



// displaying tasks after deletion
console.log("Tasks after deletion :- \n")
console.log(taskManager.displayTasks());






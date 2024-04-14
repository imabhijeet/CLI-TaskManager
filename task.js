const tasks = {};

function addTask(task) {
    const taskId = Object.keys(tasks).length + 1; // +1 to start our id from 1 instead of 0
    //Object.keys(--) retrieves an array of keys from the task objects
    tasks[taskId] = task;
    return taskId;
}

function deleteLastTask() {
    const lastTaskId = Object.keys(tasks).length;
    if (lastTaskId > 0) {
        delete tasks[lastTaskId];
        return true;
    } else {
        return false; 
    }
}

function deleteTask(taskId) {
    for (let i = 0; i < Object.keys(tasks).length; i++) {
        if(taskId == i) {
            delete tasks[i];
            return true;
        }
        else false;
    }
}

function updateTask(taskId, updatedTask) {
    if (tasks[taskId]) {
        tasks[taskId] = updatedTask;
        return true;
    } else {
        return false; 
    }
}

function displayTasks() {
    return tasks;
}

module.exports = {
    addTask,
    deleteLastTask,
    updateTask,
    displayTasks, 
   deleteTask
};
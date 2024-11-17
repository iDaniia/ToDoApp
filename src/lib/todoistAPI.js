import { TodoistApi } from "@doist/todoist-api-typescript";
const api = new TodoistApi("ADD YOUR TOKEN HERE");


export let addTask = async (/** @type {string} */ content) => {
  try {
    var task = await api.addTask({ content });
    return task;
  } catch (error) {
    console.error("Error adding task:", error);
    return null;
  }
};

export let deleteTask = async (/** @type {string} */ dTaskId) => {
  try {
    var dTask = await api.deleteTask(dTaskId);
    return dTask;
  } catch (error) {
    console.error("Error deleting task:", error);
    return null;
  }
};

export const viewTasks = async() => {
  try {
    var tasksList = await api.getTasks();
    // tasksList.forEach(tasksList => {
    // console.log(tasksList.content);
    // });
    return tasksList; 
  } catch (error) {
    console.error("Error viewing tasks:", error);
    return null;
  }
}

export let updateTasks  = async (/** @type {string} */ taskID ,/** @type {string} */ content) =>{
try {
  var updatedTask = await api.updateTask(taskID, {content}) 
  //console.log(updatedTask.content)
  return updatedTask.content;
} catch (error) {
  console.error("Error updating task:", error);
  return null;
}
}

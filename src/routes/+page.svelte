<script>
// @ts-nocheck
  import { addTask, deleteTask, updateTasks, viewTasks } from "$lib/todoistAPI";
  import TasksList from "./components/TasksList.svelte";
  import TaskForm from "./components/TaskForm.svelte";
  import { onMount } from "svelte";

  // @ts-ignore
  /**
   * @type {({ id: string; order: number; content: string; description: string; projectId: string; isCompleted: boolean; labels: string[]; priority: number; commentCount: number; createdAt: string; url: string; creatorId: string; } & { due?: ({ string: string; date: string; isRecurring: boolean; } & { datetime?: string | null | undefined; timezone?: string | null | undefined; lang?: string | null | undefined; }) | null | undefined; duration?: { amount: number; unit: "minute" | "day"; } | null | undefined; assigneeId?: string | null | undefined; assignerId?: string | null | undefined; parentId?: string | null | undefined; sectionId?: string | null | undefined; })[] | null}
   */
  let tasksList = [];

  const fetchTasks = async () => {
    // @ts-ignore
    tasksList = await viewTasks();
  };

  onMount(() => {
    fetchTasks();
  });

  // @ts-ignore
  const handleAddTask = async (newTaskContent) => {
    // console.log("inside adddinngg")
    // console.log("the task is" , newTaskContent)
    if (newTaskContent.trim()) {
      const result = await addTask(newTaskContent);
      if (result) {
        alert("Task added successfully");
        fetchTasks(); 
      } else {
        alert("Failed to add task");
      }
    } else {
      alert("Please enter a task.");
    }
  };

  

  // @ts-ignore
  const handleDeleteTask = async (taskID) => {
    //console.log("inside handle delete");
    const result = await deleteTask(taskID);
    if (result) {
      alert("Task deleted successfully");
      fetchTasks(); 
    } else {
      alert("Failed to delete task");
    }  }


  const cancelDelete = async () => {
    if (confirm("Do you really want to delete this task?") ) {
        const result = await deleteTask(taskID);
    if (result) {
      alert("Task deleted successfully");
      fetchTasks(); 
    } else {
      alert("Failed to delete task");
    }
  }


  };

  // @ts-ignore
  const handleUpdateTask = async (taskID, updatedTaskContent) => {
    const result = await updateTasks(taskID, updatedTaskContent);
    if (result) {
      alert("Task updated successfully");
      fetchTasks(); 
    } else {
      alert("Failed to update task");
    }
  };
</script>

<main class = "flex justify-center items-center bg-background bg-cover min-h-screen">
  <div class="bg-[#fffcfc7d] rounded-[35px] min-h-[1311px] min-w-[1730px]  ">
  <t1 class = "text-darkBlue text-[100px] font-bold font-['Inter'] flex justify-center m-[50px]"  > To Do List</t1>
  <TaskForm on:addTask = {(event) => handleAddTask(event.detail.content)}/>
  <TasksList {tasksList} onDeleteTask={handleDeleteTask}  onUpdateTask={handleUpdateTask} />
  </div>
</main>


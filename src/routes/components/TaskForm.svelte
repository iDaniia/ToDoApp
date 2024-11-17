<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let newTask = "";

 const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch("addTask", {content:newTask});
      newTask = ""; 
    }
  };
</script>

<main>

    <form on:submit|preventDefault={handleAddTask} class="flex justify-center m-[23px]">
        <input class="w-[1305px] h-[95px] rounded-[10px] p-3 text-[35px] font-['Inter']"  type="text" bind:value={newTask} placeholder="Enter a task ..." />
        <button type="submit" class="bg-darkBlue w-[230px] h-[95px] ml-[23px] mb-[5px] rounded-[10px] hover:bg-[#296298]  text-white text-[35px] font-['Inter'] " >Add</button>
      </form>
</main>

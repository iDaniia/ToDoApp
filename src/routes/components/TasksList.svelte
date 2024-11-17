<script>
  // @ts-nocheck
  import TaskItem from "./TaskItem.svelte";

  // @ts-ignore
  export let tasksList = [];
  export let onUpdateTask;
  export let onDeleteTask;
</script>

{#if tasksList.length > 0}
  {#each tasksList as task}
    <TaskItem
      {task}
      on:delete = {(event) => onDeleteTask(event.detail.id)}
      on:update={(event) => onUpdateTask(event.detail.id, event.detail.content)}
      
    />
    <!-- {console.log(task.content)} -->
  {/each}
{:else}
  <p>No Tasks</p>
{/if}


<script>
  import { createEventDispatcher } from "svelte";

  export let task;
  const dispatch = createEventDispatcher();

  const handleDelete = () => {
    dispatch("delete", { id: task.id });
  };

  const handleUpdate = () => {
    dispatch("update", { id: task.id, content: task.content });
  };
</script>

<main>

  <div class="flex justify-center shrink-0">
    <input
      class="rounded-[10px] w-[1305px] h-[80px] text-[35px] font-['Inter'] p-3 m-[23px]"
      type="text"
      bind:value={task.content}
      placeholder="Update task content"
    />

    <button
      on:click={handleUpdate}
      class="bg-[#27425d] w-[81px] h-[81px] m-[18px] rounded-full flex items-center justify-center hover:bg-[#25598a]"
      aria-label="Update Task"
    >
      <img
        src="/src/routes/images/EditIcon.png"
        alt="Update Icon"
        class="w-[45px] h-[40px]"
      />
    </button>



    <button
      on:click={handleDelete}
      class=" bg-[#d02020] w-[81px] h-[81px] m-[18px] rounded-full flex items-center justify-center hover:bg-red-600"
      aria-label="DeleteTask"
    >
      <img
        src="/src/routes/images/deleteIcon.png"
        alt="Delete Icon"
        class="w-[40px] h-[36px]"
      />
    </button>


  </div>
</main>

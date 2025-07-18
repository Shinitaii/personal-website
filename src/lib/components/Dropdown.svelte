<script lang="ts">
  export let title: string;
  export let open: boolean = false;

  let isOpen = open;

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="my-2 w-full border rounded-lg bg-lighter-bg dark:bg-lighter-dark-bg border-border dark:border-dark-border shadow-md">
    <div class='px-4 flex justify-center items-center'>
        <p class='w-11/12 text-xl font-bold'>{title}</p>
        <button
            class="w-1/12 text-xl flex justify-center items-center m-4 font-bold text-left focus:outline-none scale-150 hover:scale-180 transition hover:cursor-pointer active:scale-150"
            on:click={toggle}
            aria-expanded={isOpen}
            aria-controls={`dropdown-${title}`}
        >
            <span>{isOpen ? '▲' : '▼'}</span>
        </button>
    </div>
    
  {#if isOpen}
    <div id={`dropdown-${title}`} class="p-4 border-t border-border dark:border-dark-border">
        <div class="grid grid-cols-5 gap-x-2 gap-y-4">
            <slot />
        </div>
    </div>
  {/if}
</div>
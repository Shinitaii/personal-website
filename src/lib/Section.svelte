<script lang='ts'>
    export let id: string = ""
    export let title: string
    export let inner: boolean = false
</script>

<div id={id} class='p-8'>
  <div class={`${inner ? 'w-full' : 'w-1/2'} mx-auto my-2 p-4 flex flex-col justify-center items-center bg-bg dark:bg-dark-bg border border-border dark:border-dark-border rounded-2xl shadow-md gap-4`}>
    {#if title}
      <div class='text-xl font-bold border-b border-text dark:border-dark-text self-start'>{title}</div>
    {/if}
    <div class='w-full flex flex-col'>
      <slot/>
    </div>
  </div>
</div>

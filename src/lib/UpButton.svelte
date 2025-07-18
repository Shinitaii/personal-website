<script lang=ts>
    import { onMount } from 'svelte';
    let show = false;
    const backToTop = (): void => window.scrollTo({top: 0, behavior: 'smooth'})

    onMount(() => {
    const handleScroll = () => {
      show = window.scrollY > 0;
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

{#if show}
<button 
    type='button'
    on:click={backToTop}
    class='m-4 p-3 bottom-0 right-0 fixed text-md bg-bg dark:bg-dark-bg text-text dark:text-dark-text hover:text-primary dark:hover:text-dark-primary transition duration-300 hover:cursor-pointer rounded-2xl border-border dark:border-dark-border border active:scale-95 active:duration-200 shadow-md'
>
    BACK TO TOP
</button>
{/if}
<script lang='ts'>
	import Button from "./Button.svelte";

  const sections: string[] = [
    'stacks', 'projects', 'contact'
  ]

  let isDark = false;

  const scrollToSection = (id: string): void => document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    isDark = document.documentElement.classList.contains('dark');
  }
</script>

<header>
  <div class='p-4 bg-bg dark:bg-dark-bg mx-auto w-3/5 flex justify-evenly border-border dark:border-dark-border border rounded-b-2xl shadow-md'>
    <h1 class="text-2xl font-bold">Shinitaii</h1>
    <div>
      {#each sections as section}
        <Button 
          on:click={() => scrollToSection(section)}
          className='mx-1 p-1'
        >
          {section.toUpperCase()}
        </Button>
      {/each}
    </div>
    <Button on:click={toggleDarkMode} className='hover:scale-120'>{isDark ? '🌙' : '☀️'}</Button>
  </div>
</header>
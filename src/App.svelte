<script>
  import Nav from './nav.svelte';
  import Intro from './intro.svelte';
  import About from './about.svelte';
  import BackUp from './lib/backUp.svelte';
</script>
<main>
  <div>
    <Nav/>
    <Intro/>
    <About/>
  </div>
  <BackUp/>
</main>
<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>

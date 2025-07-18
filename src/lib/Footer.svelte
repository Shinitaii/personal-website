<script lang="ts">
  import Icon from '@iconify/svelte';
  import { socials } from '$lib/socials';
  const year = new Date().getFullYear();
</script>

<footer class="w-full mt-12 py-6 bg-bg dark:bg-dark-bg border-t border-border dark:border-dark-border flex flex-col items-center gap-2 text-sm">
  <div class="flex gap-4 mb-1">
    {#each socials as s}
      <a href={s.url} target="_blank" rel="noopener" class="hover:scale-110 transition-transform" title={s.name} tabindex="0">
        <Icon icon={s.icon} width="24" />
      </a>
    {/each}
  </div>
  <div class="opacity-70">&copy; {year} Shinitaii. All rights reserved.</div>
  <div class="opacity-60">
    <a href="https://github.com/Shinitaii/personal-website" target="_blank" rel="noopener" class="underline hover:text-primary">Source Code</a>
  </div>
</footer>

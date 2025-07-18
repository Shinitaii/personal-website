<script lang="ts">
  export let label: string;
</script>

<div class="hover:-translate-y-1.5 transition flex bg-bg dark:bg-dark-bg flex-col justify-end items-center gap-3 p-2 rounded border border-border shadow-md">
  <slot/>
  <span class='font-bold text-xs'>{label}</span>
</div>

<script lang='ts'>
    import Section from '$lib/Section.svelte';
    import Icon from '@iconify/svelte';
    import { socials } from '$lib/socials';
</script>

<Section id='contact' title='Contacts'>
    <!-- Socials Top -->
    <div class="flex flex-wrap gap-6 justify-center mb-10">
        {#each socials as s}
            <a href={s.url} target="_blank" rel="noopener" class="flex flex-col items-center group" title={s.name} tabindex="0">
                <Icon icon={s.icon} width="36" class="transition-transform group-hover:scale-110 group-focus:scale-110" />
                <span class="text-xs mt-1 opacity-70 group-hover:opacity-100 group-focus:opacity-100">{s.name}</span>
            </a>
        {/each}
    </div>
</Section>
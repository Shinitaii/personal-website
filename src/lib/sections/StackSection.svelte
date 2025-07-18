<script lang='ts'>
	import Dropdown from "$lib/components/Dropdown.svelte";
	import DropdownItem from "$lib/components/DropdownItem.svelte";
	import Section from "$lib/Section.svelte";
    import Icon from '@iconify/svelte';
</script>

<Section id='stacks' title='Tech Stacks'>
    <Dropdown title="Languages">
        <DropdownItem label='TypeScript'>
            <Icon icon="logos:typescript-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='JavaScript'>
            <Icon icon="logos:javascript" width="28" />
        </DropdownItem>
        <DropdownItem label='Java'>
            <Icon icon="logos:java" width="28" />
        </DropdownItem>
        <DropdownItem label='Python'>
            <Icon icon="logos:python" width="28" />
        </DropdownItem>
        <DropdownItem label='C#'>
            <Icon icon="logos:c-sharp" width="28" />
        </DropdownItem>
        <DropdownItem label='Dart'>
            <Icon icon="logos:dart" width="28" />
        </DropdownItem>
        <DropdownItem label='Kotlin'>
            <Icon icon="logos:kotlin-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='HTML'>
            <Icon icon="logos:html-5" width="28" />
        </DropdownItem>
        <DropdownItem label='CSS'>
            <Icon icon="logos:css-3" width="28" />
        </DropdownItem>
        <DropdownItem label='PHP'>
            <Icon icon="logos:php" width="28" />
        </DropdownItem>
    </Dropdown>
    <Dropdown title="Databases">
        <DropdownItem label='MySQL'>
            <Icon icon="logos:mysql" width="28" />
        </DropdownItem>
        <DropdownItem label='SQL Developer'>
            <Icon icon="mdi:database" width="28" />
        </DropdownItem>
        <DropdownItem label='PostgreSQL'>
            <Icon icon="logos:postgresql" width="28" />
        </DropdownItem>
        <DropdownItem label='Firebase'>
            <Icon icon="logos:firebase" width="28" />
        </DropdownItem>
        <DropdownItem label='Supabase'>
            <Icon icon="logos:supabase-icon" width="28" />
        </DropdownItem>
    </Dropdown>
    <Dropdown title="Website Frameworks">
        <DropdownItem label='Svelte'>
            <Icon icon="logos:svelte-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='Next.js'>
            <Icon icon="logos:nextjs-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='React'>
            <Icon icon="logos:react" width="28" />
        </DropdownItem>
        <DropdownItem label='Express'>
            <Icon icon="logos:express" width="28" />
        </DropdownItem>
        <DropdownItem label='CodeIgniter'>
            <Icon icon="logos:codeigniter-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='Spring Boot'>
            <Icon icon="logos:spring-icon" width="28" />
        </DropdownItem>
    </Dropdown>
    <Dropdown title="Mobile Frameworks">
        <DropdownItem label='Flutter'>
            <Icon icon="logos:flutter" width="28" />
        </DropdownItem>
    </Dropdown>
    <Dropdown title="Game Engines">
        <DropdownItem label='Unity'>
            <Icon icon="logos:unity" width="28" />
        </DropdownItem>
        <DropdownItem label='Godot'>
            <Icon icon="logos:godot-icon" width="28" />
        </DropdownItem>
    </Dropdown>
        <Dropdown title="Software Tools">
        <DropdownItem label='Docker'>
            <Icon icon="logos:docker-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='Node.js'>
            <Icon icon="logos:nodejs-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='Composer'>
            <Icon icon="logos:composer" width="28" />
        </DropdownItem>
        <DropdownItem label='npm'>
            <Icon icon="logos:npm-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='Postman'>
            <Icon icon="logos:postman-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='Maven'>
            <Icon icon="simple-icons:apachemaven" width="28" />
        </DropdownItem>
        <DropdownItem label='Git'>
            <Icon icon="logos:git-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='Github'>
            <Icon icon="logos:github-icon" width="28" />
        </DropdownItem>
        <DropdownItem label='VS Code'>
            <Icon icon="logos:visual-studio-code" width="28" />
        </DropdownItem>
        <DropdownItem label='Visual Studio'>
            <Icon icon="logos:visual-studio" width="28" />
        </DropdownItem>
        <DropdownItem label='IntelliJ'>
            <Icon icon="logos:intellij-idea" width="28" />
        </DropdownItem>
        <DropdownItem label='Android Studio'>
            <Icon icon="devicon:androidstudio" width="28" />
        </DropdownItem>
    </Dropdown>
</Section>
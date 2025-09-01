<script lang="ts">
	import Button from './Button.svelte';
</script>

<div class="grid h-screen grid-cols-2">
	<div class="flex flex-col items-center justify-center">
		<div class="flex h-3/5 w-1/2 items-end justify-center">
			<img src="/pic.jpg" alt="Richmond" class="rounded-full p-3" />
		</div>
		<div class="flex h-2/5 w-1/2 flex-col items-start justify-start">
			<p>Hello! <span class="italic">My name is...</span></p>
			<p class="mb-2 text-6xl font-bold">Richmond Viloria</p>
			<p>I'm an aspiring software engineer</p>
		</div>
	</div>
	<div class="flex flex-col items-center justify-start">
		<div class="flex h-3/5 w-full flex-col items-start justify-end">
			<p>An undergraduate student in</p>
			<p class="text-5xl font-bold">Computer Science</p>
			<p class="italic">Major in Application Development</p>
			<p class="mt-4 italic">Creating, planning and designing systems in:</p>
			<div class="ml-8 flex flex-col gap-1">
				<p class="text-2xl">{'>'} <span class="font-bold">Game Development</span></p>
				<p class="text-2xl">{'>'} <span class="font-bold">Mobile Development</span></p>
				<p class="text-2xl">{'>'} <span class="font-bold">Website Development</span></p>
			</div>
		</div>
	</div>
</div>

<script lang='ts'>
  import Button from "./Button.svelte";


</script>

<div class="grid grid-cols-2 h-screen">
  <div class="flex flex-col items-center justify-center">
    <div class="w-1/2 h-3/5 flex items-end justify-center">
      <img src="/pic.jpg" alt="Richmond" class="p-3 rounded-full" />
    </div>
    <div class="w-1/2 h-2/5 flex flex-col justify-start items-start">
        <p>Hello! <span class='italic'>My name is...</span></p>
      <p class="font-bold text-6xl mb-2">Richmond Viloria</p>
      <p>I'm an aspiring software engineer</p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-start ">
    <div class="w-full h-3/5 flex flex-col justify-end items-start">
      <p>An undergraduate student in </p>
      <p class='text-5xl font-bold'>Computer Science</p>
      <p class='italic'>Major in Application Development</p>
      <p class='mt-4 italic'>Creating, planning and designing systems in:</p>
      <div class='flex flex-col ml-8 gap-1'>
        <p class='text-2xl'>{'>'} <span class='font-bold'>Game Development</span></p>
        <p class='text-2xl'>{'>'} <span class='font-bold'>Mobile Development</span></p>
        <p class='text-2xl'>{'>'} <span class='font-bold'>Website Development</span></p>
      </div>
    </div>    
  </div>
</div>
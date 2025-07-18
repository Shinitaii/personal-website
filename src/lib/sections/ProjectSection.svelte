<script lang='ts'>
  import Section from '$lib/Section.svelte';
    type Project = {
    title: string;
    image: string;
    techStack: string[];
    platform: string;
    period: string;
    role: string;
    desc: string;
    reason: string;
  };

  const projects: Project[] = [
    {
      title: "OAS",
      image: "",
      techStack: ["Java", "SQL Developer"],
      platform: "Native PC",
      period: "2022",
      role: "Lead Developer",
      desc: "A native attendance system for schools, allowing admins, teachers, and students to manage and track attendance efficiently with a user-friendly interface.",
      reason: "Capstone project for 2022, aimed at solving real-world attendance tracking issues in educational institutions."
    },
    {
      title: "GymRAWR",
      image: "",
      techStack: ["Java", "MySQL"],
      platform: "Native PC",
      period: "2023",
      role: "Lead Developer",
      desc: "A comprehensive gym management system for handling memberships, trainers, attendance, and equipment inventory, streamlining daily operations.",
      reason: "Developed as a major subject requirement in 2023 to address the needs of local gyms for digital management tools."
    },
    {
      title: "Wear Your Mood",
      image: "",
      techStack: ["PHP", "MySQL"],
      platform: "Website",
      period: "2023",
      role: "Backend Developer",
      desc: "An e-commerce platform for selling customizable clothing, featuring user accounts, product management, and secure checkout.",
      reason: "Created for a 2024 subject requirement, focusing on building a scalable and secure online store."
    },
    {
      title: "Archivary",
      image: "",
      techStack: ["C#", "MySQL"],
      platform: "Native PC",
      period: "2023",
      role: "Lead Developer",
      desc: "A digital library management system to track borrowed books, manage inventory, and generate reports for librarians and users.",
      reason: "Final project for a 2023 subject, designed to modernize library workflows and improve accessibility."
    },
    {
      title: "Utilitool",
      image: "",
      techStack: ["Next.js", "React", "Firebase", "Express", "TypeScript"],
      platform: "Website",
      period: "2023",
      role: "Lead Developer",
      desc: "A web-based utility calculator for landlords, automating the calculation and tracking of tenant utility costs with a clean dashboard.",
      reason: "Commissioned by a landlord client as a freelance project to simplify property management."
    },
    {
      title: "Deck Mobile",
      image: "",
      techStack: ["Flutter", "Dart", "Firebase"],
      platform: "Mobile",
      period: "2023",
      role: "Backend Developer",
      desc: "A mobile flashcard app with AI-powered card generation, helping students boost productivity and retention through smart study tools.",
      reason: "Built for a 2023 subject, inspired by the need for effective, on-the-go study aids for students."
    },
    {
      title: "Ventify",
      image: "",
      techStack: ["Next.js", "React", "MongoDB"],
      platform: "Website",
      period: "2024",
      role: "Lead Developer",
      desc: "A web-based anonymous social media that posts anything you want to rant about.",
      reason: "A self-project in learning about the ecosystem in terms of website backend"
    },
    {
      title: "Through The Woods",
      image: "",
      techStack: ["Unity", "C#"],
      platform: "Mobile",
      period: "2024",
      role: "Lead Developer",
      desc: "A 2D adventure-puzzle mobile game about siblings navigating a magical forest, inspired by Hansel and Gretel, featuring hand-drawn art and original puzzles.",
      reason: "Developed as a 2024 subject requirement, combining storytelling and game design skills."
    },
    {
      title: "Deck Website + API",
      image: "",
      techStack: ["CodeIgniter", "HTML", "CSS", "JavaScript", "PHP", "Express", "TypeScript", "Firebase"],
      platform: "Website + API",
      period: "2025",
      role: "Fullstack Developer",
      desc: "The admin web portal and API for the Deck app, enabling administrators to manage users, content, and analytics with robust backend services.",
      reason: "Final project for a 2025 subject, expanding the Deck ecosystem for better admin control and scalability."
    },
    // Add more projects as needed
  ];

  let current = 0;

  const goTo = (idx: number) => {
    current = idx;
  }
</script>

<Section id='projects' title='Projects'>
    <div class="relative w-full flex flex-col items-center">
    <!-- Carousel Slides -->
    <div class="w-full h-64 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 mb-4">
      {#each projects as project, idx}
        {#if project.image && project.image !== ""}
          <img
            src={project.image}
            alt={project.title}
            class="transition-all duration-500 object-contain w-full h-full"
            style="display: {current === idx ? 'block' : 'none'}"
          />
        {:else}
          <div
            class="flex items-center justify-center w-full h-full text-gray-400 dark:text-gray-500 text-4xl font-bold bg-gray-200 dark:bg-gray-700"
            style="display: {current === idx ? 'flex' : 'none'}"
          >
            No Image
          </div>
        {/if}
      {/each}
    </div>
    <!-- Dot Navigation -->
    <div class="flex gap-2 mb-6">
      {#each projects as _, idx}
        <button
          class="w-3 h-3 rounded-full transition bg-gray-400 dark:bg-gray-600"
          class:dark:bg-lighter-dark-bg={current === idx}
          class:bg-primary={current === idx}
          on:click={() => goTo(idx)}
          aria-label={`Go to project ${idx + 1}`}
        ></button>
      {/each}
    </div>
    <!-- Project Details -->
    <div class="w-full max-w-2xl mx-auto p-4 rounded-lg bg-bg dark:bg-dark-bg border border-border dark:border-dark-border shadow">
      <h2 class="text-2xl font-bold mb-2">{projects[current].title}</h2>
      <div class="mb-2 flex flex-wrap gap-2">
        {#each projects[current].techStack as tech}
          <span class="px-2 py-1 bg-primary/20 rounded text-sm">{tech}</span>
        {/each}
      </div>
      <div class="mb-2 text-sm text-gray-600 dark:text-gray-300">
        <span class="mr-4"><b>Platform:</b> {projects[current].platform}</span>
        <span class="mr-4"><b>Period:</b> {projects[current].period}</span>
        <span><b>Role:</b> {projects[current].role}</span>
      </div>
      <div class="mb-2"><b>Description:</b> {projects[current].desc}</div>
      <div><b>Why:</b> {projects[current].reason}</div>
    </div>
  </div>
</Section>
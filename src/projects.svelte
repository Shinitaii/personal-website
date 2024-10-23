<script>
    let projects = [
        {id: 1, image: '/nunito.png', name: 'Deck', description: 'A productivity app focused for students. Deck uses AI-powered flashcards and task management tools to enhance efficiency and effectiveness for learners.'},
        
    ]
</script>
<section id='projects'>
    <div>
        <h1>Projects</h1>
        <div class="project-grid">
            {#each projects as project}
                <div class="project-card">
                    <img src={project.image} alt={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            {/each}
    </div>
    </div>
</section>
<style>
    div:first-child{
    padding: 2em;
    background-color: #f9f9f9;
    border-radius: 2em;
    text-align: start;
  }

  h1 {
    color: #5271ff;
    margin-bottom: 1.5em;
  }

  .project-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
  }

  .project-card {
    background-color: #fff;
    border-radius: 1em;
    padding: 1.5em;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }

  .project-card:hover {
    transform: translateY(-5px); /* Small lift effect on hover */
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 0.5em;
    margin-bottom: 1em;
  }

  h3 {
    color: #5271ff;
    margin-bottom: 0.5em;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
</style>
<script>
    let hasScrolledDown = false;

    // Function to check if the user has scrolled down
    window.addEventListener('scroll', () => {
    hasScrolledDown = window.scrollY > 100; // Adjust threshold as needed
    });

    function backUp () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling
        });
    }
</script>
{#if hasScrolledDown}
    <div on:click={backUp}>
        ⬆
    </div>
{/if}
<style>
    div {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #5271ff;
        color: white;
        padding: 0.5em 0.75em;
        border-radius: 20%;
        cursor: pointer;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s;
    }

    div:hover{
        background-color: #405acb;
    }
</style>
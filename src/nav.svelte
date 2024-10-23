<script>
    $: isDarkMode = false;

    function toggleTheme(){
        isDarkMode = !isDarkMode;
    }

    $: logo = !isDarkMode ? '/icons8-moon-24(1).png' : '/icons8-sun-24.png';
</script>
<nav>
    <div>
        <a href=''><img src={'/full-shinn-logo_light.png'} alt="shinn."></a>    
    </div>
    <hr>
    <div>
        <a href='#about'><li>About</li></a>
        <a href='#projects'><li>Projects</li></a>
    </div>
    <hr>
    <div>
        <button on:click={toggleTheme}>
            <img src={logo} alt='sun'>
        </button>
    </div>
</nav>
<style>
    nav, div {
        display: flex;
        justify-content: center;
    }

    nav > div {
        align-items: center;
    }

    div:first-of-type a:first-of-type{
        margin: 1em;
        height: 2em;
    }
    
    div:first-of-type > a {
        padding: 0.25em;
    }

    img{
        height: 100%;
        width: auto;
    }

    a {
        margin: 0 0.5em;
        color: black;
        text-decoration: none;
        border-radius: 0.5em;
        transition: background-color 0.3s, color 0.3s;
    }

    a:hover{
        background-color: #dddddd;
        color: #5271ff;
    }

    li {
        margin: 0.5em 1em;
        list-style: none;
    }

    hr {
        margin: 1em 0.5em;
        background-color: #000;
        width: 3px;
        height: auto;
        display: inline-block;
        border: none;
    }

    button {
        margin: 0em 0.5em;
        padding: 0.5em 0.75em;

        border: none;
        border-radius: 0.5em;

        background-color: #fff;

        cursor: pointer;

        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #dddddd;
    }
</style>
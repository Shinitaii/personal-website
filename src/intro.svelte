<script>

</script>

<section>
    <div class='intro-section'>
        <div class='intro-name'>
            <h1><strong>Hello, I am <br><span>Richmond</span>.</strong></h1>
            <p>I <span>plan</span>, <span>think</span>, and <span>develop</span> applications.</p>
        </div>
        <div class='intro-photo'>
            <img src="/richmond-photo-wow.jpg" alt="">
        </div>
    </div>
</section>

<style>
    section{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    div {
        height: 100vh;
        display: flex;
        justify-content: space-evenly;
    }

    h1, p {
        margin: 0;
    }

    h1 {
        font-size: 3em;
    }

    span {
        color: #5271ff;
    }

    img {
        width: 12em;
        height: 12em;
        border-radius: 100%;
    }

    .intro-name{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    .intro-photo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import DEADISM from '$lib/assets/images/DEADISM.png'
    import Link from '$lib/assets/icons/link.svg'

    let isPublished = $state(true)

</script>

<!-- DEADISM -->
<div class="text-center mt-15">
    <div class="flex justify-center mt-10">
        <img class="size-120" src={DEADISM} alt="To be Announced.">
    </div>

<!-- Project Title -->
    <h1 class="mt-5 text-neutral-950 dark:text-neutral-50 text-7xl">"DEADISM II"</h1>
    
    <!-- Project Download Links -->
    {#if isPublished}
        <div class="flex justify-center">
            <div class="flex justify-center p-5">
                <a class="text-[20px] hover:underline underline-offset-3" href="https://modrinth.com/project/deadism">Modrinth</a>
                <img class="size-5 translate-y-1.5 ml-1.5" src={Link} alt="LinkIcon">
            </div>
            <div class="flex justify-center p-5">
                <a class="text-[20px] hover:underline underline-offset-3" href="#">Curseforge</a>
                <img class="size-5 translate-y-1.5 ml-1.5" src={Link} alt="LinkIcon">
            </div>
        </div>
    {/if}


    <!-- Description -->
    <p class="mt-5 w-[400px] justify-self-center text-left">—— You are a police officer stranded in the middle of a forest. Your aim? Find a way out.</p>
    <p class="mt-5 w-[400px] justify-self-center text-[15px] text-left"><i>Further details about Options, Installation Guides, Multiplayer Guide etc can be found on the distributing websites.</i></p>


</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');

    h1 {
        font-family: 'Jersey 25';
    }

    a {
        cursor: pointer;
    }

</style>
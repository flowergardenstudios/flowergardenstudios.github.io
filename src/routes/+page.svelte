<script lang=ts>
    import Image from '$lib/assets/images/camcorder.png'
    import Wordmark from '$lib/assets/images/camcorder-wordmark-invert.png'
    import { onMount } from 'svelte';
    import gsap from "gsap";

    let icon: HTMLElement;


</script>

<main class="">
    <div class="absolute h-screen w-screen">
        <img class="h-screen w-screen brightness-30" alt="a" src={Image}>
        <div bind:this={icon} class="absolute top-[80%] -translate-y-1/2 left-[80%] -translate-x-1/2">
             <img class="invert w-100" alt="a" src={Wordmark}>
        </div>
    </div>
</main>
<script>
    import {fly,fade} from "svelte/transition"
    import {bounceIn, bounceOut, quintOut} from "svelte/easing"
    export let url = url
</script>

{#key url}
    <div in:fade={{duration:1500 , delay:100 , easing:quintOut}} >
        <slot/>
    </div>
{/key}
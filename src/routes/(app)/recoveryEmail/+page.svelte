<script>
  import OTPvarify from "./OTPvarify.svelte";
  import RecoveryEmail from "./RecoveryEmail.svelte";
  export let form
  $:console.log(form)
</script>
<main>
  {#if form?.isExist}
    <OTPvarify {form} />
  {:else}
    <RecoveryEmail {form} />
  {/if}
</main>
<script>
  import CongratulationCard from "$lib/components/CongratulationCard.svelte";
  import RecoveryPassword from "./RecoveryPassword.svelte";
export let form
</script>
<main>
  {#if form?.isExist}
      <CongratulationCard title="Succesfully changed password" button="Log in"/>
  {:else}

  <RecoveryPassword form={form}/>
   
  {/if}

</main>
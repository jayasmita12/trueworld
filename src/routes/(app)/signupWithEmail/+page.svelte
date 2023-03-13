<script>
  import CongratulationCard from "$lib/components/CongratulationCard.svelte";
  import { hasSignedUp } from "$lib/stores/auth";
  import NewUserAccount from "./NewUserAccount.svelte";

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<main>
  {#if $hasSignedUp}
    <CongratulationCard
      title="Congratulation, Start your jurney!"
      button="My Profile"
      link="/profile" />
  {:else}
    <NewUserAccount {form} />
  {/if}
</main>

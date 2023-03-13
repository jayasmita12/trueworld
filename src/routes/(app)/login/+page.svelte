<script>
  import Login from "./Login.svelte";
  import PasswordCheck from "./PasswordCheck.svelte";

  /** @type {import('./$types').ActionData} */
  export let form;
  $: console.log(form?.errors);
</script>

<main>
  {#if form?.isExist}
    <PasswordCheck {form} />
  {:else}
    <Login {form} />
  {/if}
</main>

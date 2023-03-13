<script>
  import Dashboard from "../dashboard/Dashboard.svelte";
  import Plan from "../plan/Plan.svelte";
  import ProfileDetails from "./ProfileDetails.svelte";

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<ProfileDetails {form} />

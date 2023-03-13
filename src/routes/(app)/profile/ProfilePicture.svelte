<script>
  import { colors, user } from "$lib/stores/user";

  let fileInput;

  const onFileSelected = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      $user.profilePicture = e.target.result;
      $user.progress = 50;
      $user.progressColor = "green";
    };
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => fileInput.click()}
  class="relative radial-progress {$colors[$user.progressColor]} cursor-pointer"
  style="--value:{$user.progress}; width:7rem; height:7rem; --thickness: 3.5px;">
  {#if $user.profilePicture}
    <img src={$user.profilePicture} class="w-24 h-24 rounded-full " alt="" />
  {:else}
    <div class="w-24 h-24 rounded-full bg-gray-400" />
  {/if}
  <div
    class="scale-x-[-1] absolute top-2 left-1 text-secondary bg-neutral-content  rounded-full px-1 py-1 cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
  </div>

  <input
    class="hidden"
    type="file"
    accept=".jpg, .jpeg, .png"
    bind:this={fileInput}
    on:change={(e) => onFileSelected(e)} />
</div>

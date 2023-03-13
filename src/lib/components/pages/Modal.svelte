<script>
  import { currentVideoUrl } from "$lib/stores/globalStore";

  export let title;

  const youtube_parser = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  $: videoId = $currentVideoUrl && youtube_parser($currentVideoUrl);
</script>

<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer ">
  <label class="modal-box relative bg-tw-blue max-w-7xl max-h-fit" for="">
    <!-- {#if videoUrl} -->
    <!-- <video
      autoplay
      loop
      muted
      controls
      playsinline
      type="video/mp4"
      class="max-h-[85vh] w-full object-cover">
      <source src={url ?? ""} type="video/mp4" />
    </video> -->
    <!-- {/if} -->

    <div class="h-[40vh] md:h-[60vh] lg:h-[80vh]">
      {#if videoId}
        <iframe
          class="h-full w-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}`}
          {title} />
      {:else}
        <div
          class="w-full h-full grid place-items-center text-xl font-medium text-white/90">
          <p>Video not found</p>
        </div>
      {/if}
    </div>
    <div class="mt-5 flex flex-col md:flex-row justify-between md:items-center">
      <h1 class="text-xl font-medium text-white/90">
        {title ?? "Forest intelligent panel"}
      </h1>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => ($currentVideoUrl = null)} class="modal-action">
        <label for="my-modal-4" class="btn">Close</label>
      </div>
    </div>
  </label>
</label>

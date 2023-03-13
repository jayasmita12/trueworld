<script>
    import { page } from '$app/stores';
</script>
  <div class="h-screen p-10">
        <div class="rouned-xl p-5 bg-white flex items-center flex-col">
            <img class="h-[35rem]" src="/401/not-found.jpg" alt="">
            <div class="flex flex-col text-tw-blue">
                <!-- <span class="text-4xl ">Opps</span> -->
                <p class="mt-8">It seems your lost</p>
                <a class="p-2 border rounded-md" href="/">Go back to home</a>
                <h1>{$page.status}: {$page.error.message}</h1>
            </div>
        </div>
  </div>
 
<script>
    export let title
</script>

<nav class="bg-secondary py-2  shadow-lg ">
    <ul class="max-w-screen-xl  mx-auto px-5 flex justify-between">
        <a href="/"><li class="text-accent-content/60 flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            <span>Back</span>                  
        </li></a>
        <li class="text-accent-content font-medium">{title}</li>
        <li></li>
    </ul>
</nav>
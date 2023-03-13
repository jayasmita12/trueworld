<script>
    import Logo from "$lib/components/Logo.svelte";
  import FooterSignup from "$lib/components/FooterSignup.svelte";
</script>


<div class="w-full h-auto bg-primary pt-36 pb-36 px-4">
    <div class="flex flex-col justify-center items-center max-w-md mx-auto  bg-secondary rounded-lg shadow-lg ">
        <div class="pt-12">
            <div class="space-y-2 text-center">
              <div class="flex justify-center">
                <Logo />
              </div>
              <h3 class="text-neutral-content text-lg font-bold">Change password</h3>
              <p class="text-base-100 text-sm ">Enter your new password</p>
            </div>
        </div> 
        
        <form class="w-full px-4 grid grid-cols-1  ">
            <div class="mt-6 mb-10 space-y-4">
                <div class="relative">
                    <input type="password" placeholder="New pasword*" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2">
                    <img src="signup/eye.png" class="w-4 h-4 absolute right-3 top-3" alt="">
                </div>
                <div class="relative">
                    <input type="password" placeholder="Repeat New pasword*" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2">
                    <img src="signup/eye.png" class="w-4 h-4 absolute right-3 top-3 " alt="">
                </div>
            </div>

            <div class=" flex justify-end">
                <button class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-base-200 " disabled>Confirm</button>
            </div>
        </form>

        <FooterSignup/>
    </div>
 </div>   
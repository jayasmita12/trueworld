<script>
  import FooterSignup from "./FooterSignup.svelte";
  import Logo from "./Logo.svelte";
  export let title;
  export let button;
  export let link;
</script>

<div class="w-full h-auto bg-primary py-36 px-4">
  <div
    class="flex flex-col justify-center items-center max-w-md mx-auto  bg-secondary rounded-lg shadow-tw-btn ">
    <div class="pt-12">
      <div class="space-y-10 text-center">
        <div class="flex justify-center">
          <Logo />
        </div>
        <h3 class="text-base-100 w-[10rem]  text-lg font-bold">{title}</h3>
      </div>
      <div class="w-full  mt-7 flex justify-center ">
        <img src="signup/check.png" class="w-12" alt="" />
      </div>

      <div class="flex justify-center pt-14 pb-16">
        <a
          href={link}
          class="rounded-full  text-sm px-7 py-1 text-secondary bg-base-200"
          >{button}</a>
      </div>
    </div>
    <FooterSignup />
  </div>
</div>

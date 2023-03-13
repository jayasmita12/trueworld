<script>
  import Logo from "$lib/components/Logo.svelte";
  import FooterSignup from "$lib/components/FooterSignup.svelte";
</script>

<div class="w-full h-auto bg-primary pt-36 pb-36 px-4">
  <div
    class="flex flex-col justify-center items-center max-w-xl mx-auto  bg-secondary rounded-lg shadow-lg ">
    <div class="self-end pt-1 pr-1 cursor-pointer text-base-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 ">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div class="pt-7">
      <div class="space-y-2 text-center">
        <div class="flex justify-center">
          <Logo />
        </div>
        <p class="text-base-100 max-w-xs text-xs font-medium  pt-4">
          Our Product Manager get in touch with you to discuss your personalized
          plan
        </p>
        <h3 class="text-base-100 text-md py-8 font-medium">How would you prefer to get in touch?</h3>
      </div>
    </div>


<form action="">
    <div class="flex flex-col w-full  space-y-4">
        <div class="flex space-x-2 ">
          <input type="radio" class="accent-base-200   w-6 h-6">
          <p class="text-neutral-content font-medium">By email</p>
        </div>
        <div class="flex space-x-2">
          <input type="radio" class="accent-base-200  w-6 h-6">
          <p class="text-neutral-content font-medium">By phone</p>
        </div>
    </div>

    <div class="flex flex-row space-x-4 w-full mt-4 ">
      <div class="flex  flex-col space-x-2">
        <select
          name=""
          id="select"
          class="pr-6  py-2 bg-accent text-sm font-medium text-base-100  border-2 px-2 rounded-full focus:outline-none">
          <option class="text-base-100">Code</option>
          <option value="">ES(+91)</option>
        </select>
      </div>
      <!-- phone Number -->
      <div class="w-full">
        <input
          type="number"
          placeholder="Phone number *"
          class="bg-accent rounded-full py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2" />
      </div>
    </div>

    <div class="flex mt-2 space-x-5  w-full justify-between ">
      <div class="flex  space-x-2">
        <div class="self-end">
          <input type="radio" class="accent-base-200  w-4 h-4" name="" id="" />
        </div>
        <p class="text-primary-content self-end pb-1 text-xs font-medium">
          I agree to the <a href="/" class="text-base-100 font-normal"
            >Terms of Service</a>
          and
          <a href="/" class="text-base-100 font-normal">Privacy Policy</a>
        </p>
      </div>
      <div class="">
        <button
          class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-12 py-1 text-secondary bg-primary-content "
          >Send</button>
      </div>
    </div>
  </form>
    <FooterSignup />
  </div>
</div>

<style>
  #select > option {
    color: #05324d;
  }
  input[type='radio'] { border: 2px solid #05324d ! important; }
</style>

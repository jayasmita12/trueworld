<script>
  import BlockchainLogo from "$lib/components/BlockchainLogo.svelte";
</script>

<div class="w-full h-auto bg-primary pt-20 pb-32  px-4">
  <div class="flex flex-col justify-center  space-y-8  max-w-screen-xl  mx-auto ">
    <!-- hero section -->
    <div class="bg-cover bg-center flex h-[45vh] relative ">
      
      <img
        class="h-full w-full object-cover object-center"
        src="https://insidetelecom.com/wp-content/uploads/2022/10/smart-home-01-1024x576.jpg"
        alt="" />


      <div class="absolute top-0 left-20 flex flex-col w-full h-full">
        <!-- body -->
        <div
          class="flex-grow overflow-hidden grid place-items-center px-[5%] xl:px-0 w-full max-w-7xl mx-auto relative"
        >
          <div class="w-full text-white">
            <h1
              class="text-tw-1 lg:text-tw-45 leading-none font-medium drop-shadow-md md:max-w-lg lg:max-w-4xl"
            >
              Smart Iot Dashboard
            </h1>
            <h2 class="text-tw-1 lg:text-tw-30 font-light leading-none mt-2">
              Responsibility ,efficiency and susutainability
            </h2>
            <p
              class="text-sm xl:text-tw-3 font-light leading-tight md:max-w-sm xl:max-w-3xl mt-5"
            >
              The smart IoT Dashboard allows to manage and visualize information provided by the sensor
            </p>

            <div class="flex gap-x-5 mt-6 md:mt-10">
              <a
                href="/"
                class="btn btn-sm btn-outline rounded-full px-6 text-white capitalize hover:bg-tw-orange hover:text-tw-blue 
                    text-base font-base bg-transparent"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- dashboard section -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-x-2 gap-y-3"
    >
      <div class="bg-secondary rounded-sm w-full shadow-lg py-8 ">
        <!-- profile image -->
        <div class="flex space-x-5 px-4 ">
          <div
            class=" radial-progress text-yellow-500 "
            style="--value:20; width:5rem; height:5rem; --thickness: 3.5px;"
          >
            <img src="signup/user.png" class="w-[4.6rem] h-[4.6rem]" alt="" />
          </div>

          <div class="self-center">
            <h2 class="text-base font-semibold text-black">Micheal Scott</h2>
            <div class="text-xs text-accent-content flex">
              <p>m.scott@trueworld.com</p>
            </div>
          </div>
        </div>
        <hr class="my-3" />
        <div class="flex flex-col h-[24vh] justify-between space-y-5 mx-6">
          <div class="text-accent-content">
            <ul class="space-y-2 font-medium p">
              <li><a href="/">Change profile picture</a></li>
              <li><a href="/">Change user details</a></li>
              <li><a href="/">Change user settings</a></li>
              <li><a href="/">Change password</a></li>
            </ul>
          </div>
          <div class="w-full flex justify-end">
            <button
              class="px-6 rounded-full py-1 font-semibold border-2 border-neutral-content text-neutral-content"
              >Configuration</button
            >
          </div>
        </div>
      </div>

      <!-- My Apps -->
      <div class="bg-secondary rounded-sm w-full shadow-lg py-8 ">
        <div class="flex space-x-5 px-4">
          <div
            class="w-[4.6rem] h-[4.6rem] flex justify-center items-center bg-neutral-content/50 rounded-full bg"
          >
            <h1 class="text-secondary font-semibold text-xl">MA</h1>
          </div>
          <div class="self-center">
            <h2 class="text-base font-semibold text-black">My Apps</h2>
          </div>
        </div>
        <hr class="my-4" />

        <div class="flex flex-col h-[24vh] justify-between space-y-5 mx-6">
          <div class="text-accent-content">
            <ul class="space-y-2  font-medium p">
              <li><a href="/">App marketplace</a></li>
              <li><a href="/">Upgrade plan</a></li>
            </ul>
          </div>
          <div class="w-full flex justify-end">
            <button
              class="px-6 rounded-full py-1 font-semibold border-2 border-neutral-content text-neutral-content"
              >Launch</button
            >
          </div>
        </div>
      </div>

      <!-- Billing Invoice -->
      <div class="bg-secondary rounded-sm w-full shadow-lg py-8 ">
        <div class="flex space-x-5 px-4">
          <div
            class="w-[4.6rem] h-[4.6rem] flex justify-center items-center bg-neutral-content/50 rounded-full bg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div class="self-center">
            <h2 class="text-base font-semibold text-black">
              Billing & invoices
            </h2>
            <div class="text-xs text-accent-content flex">
              <p>Manage your bills with Stripe</p>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <div class="flex flex-col h-[24vh] justify-between space-y-5 mx-6">
          <div class="text-accent-content">
            <ul class="space-y-2 font-medium p">
              <li><a href="/">Invoices</a></li>
              <li><a href="/">Payment Methods</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Manage Plans</a></li>
            </ul>
          </div>
          <div class="w-full flex justify-end">
            <button
              class="px-6 rounded-full py-1 font-semibold border-2 border-neutral-content text-neutral-content"
              >Go to Billing</button
            >
          </div>
        </div>
      </div>

      <div
        class="bg-secondary rounded-sm w-full flex flex-col space-y-4 shadow-lg py-10"
      >
        <div class="px-4">
          <div class="  flex">
            <div class="w-full">
              <BlockchainLogo />
            </div>
            <p class="text-accent-content text-xs">
              This software carries out traceability process using Blockchain
              technology to guarantee the integrity and veracity of the data
            </p>
          </div>
        </div>
        <hr class="" />
      </div>
    </div>
  </div>
</div>

<script>
  import DashboardNav from "$lib/components/DashboardNav.svelte";

</script>



<div>
    <DashboardNav title="Carbon Footprint"/>

    <div class="w-full h-auto bg-primary pt-10 pb-10  px-4">
        <div class="flex justify-center px-10 space-y-8  max-w-screen-2xl   mx-auto ">
            <div class="grid  grid:cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-3  w-full">


                <!-- left-first-box -->
                <div class=" bg-secondary rounded-lg shadow-lg px-10 py-8  row-span-2">
                    <div class="flex space-x-5  ">
                        <div
                          class="w-[4.6rem] h-[4.6rem] flex justify-center items-center bg-neutral-content/50 rounded-full bg"
                        >
                          <h1 class="text-secondary font-semibold text-xl">CF</h1>
                        </div>
                        <div class="self-center">
                            <h3 class="text-base-100 text-xs font-medium">LOREM IPSUM</h3>
                          <h2 class="text-xl font-semibold text-primary-content">Carbon Footprint</h2>
                          <p class="text-sm text-accent-content flex">Application Shop Center</p>
                        </div>                        
                      </div>
                        <hr class="mt-8 mb-4 ">

                        <div class="grid grid-cols-2 gap-2 mx-3">
                            <div class="flex space-x-3 text-base-100">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                  </svg>                                  
                              </span>
                              <span class="text-base-100">
                                1 Organization
                              </span>
                            </div>
                            <div class="flex space-x-3 text-base-100">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                      </svg>                                      
                                </span>
                                <span>
                                    Blockchain
                                </span>
                            </div>
                            <div  class="flex space-x-3 text-base-100">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                      </svg>                                      
                                </span>
                                <span>5 Users</span>
                            </div>

                        </div>
                        <div class="mt-6 space-y-5 mx-3">
                            <p class="text-primary-content font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit non aperiam </p>
                            <p class="text-primary-content font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque quibusdam ipsam, adipisci unde quasi odio quos amet placeat, quam alias officia nostrum eaque repellat perspiciatis nisi, quae iste sint.</p>

                            <h2 class="text-neutral-content font-bold text-lg ml-3">Fuction en IpadOS & Desktop</h2>
                            <div class="w-full pt-4">
                                <button
                                  class="px-6 w-full hover:bg-tw-orange hover:text-secondary hover:border-0 rounded-full py-1 font-semibold border-2 border-neutral-content text-neutral-content"
                                  >Manage plan</button
                                >
                              </div>
                        </div>
                </div>

                <!-- right-side-first-box -->
                <div class=" bg-secondary  rounded-lg shadow-lg h-[30vh] col-span-2 bg-cover bg-center">
                    <img
                        class="h-full w-full rounded-lg  object-cover object-center"
                        src="https://i.ytimg.com/vi/htgUJDrKexg/maxresdefault.jpg"
                        alt="" />
                </div>

                <!-- right-side-middle-box -->
                <div class="flex bg-secondary px-10 py-10  rounded-lg shadow-lg space-x-4  col-span-2">
                    <div class="space-y-5 w-full">
                        <div>
                            <h2 class="text-lg font-semibold text-neutral-content">The Most Power Full Dashboard</h2>
                            <p class="text-base text-accent-content flex">Application Shop Center</p>
                        </div>
                        <div class="text-accent-content font-medium space-y-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, odio error facere eaque tempora reprehenderit pariatur, eos, eligendi natus fuga deserunt velit nam hic nulla dignissimos alias facilis unde sunt?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis cupiditate exercitationem harum, quas molestias corporis dolorem et minima quibusdam dicta doloribus nisi explicabo saepe rem possimus. Id, tenetur error.</p>
                        </div>
                        <div class="w-full pt-4">
                            <button
                              class="px-6 drop-shadow hover:bg-tw-orange hover:text-secondary hover:border-0 rounded-full py-1 font-medium border-2 border-neutral-content text-accent-content"
                              >Life Demo</button
                            >
                          </div>
                    </div>
                    <div class="w-full h-full ">
                        <img src="https://www.state.gov/wp-content/uploads/2019/04/Science-Technology-shutterstock_449187505.jpg" class="rounded-xl object-cover w-full h-full" alt="">
                    </div>
                </div>

                <div></div>
                <div class="self-end bg-secondary rounded-lg flex justify-end shadow-lg col-span-1">
                    <!-- right-side-last-(first)-box -->
                    <div class="w-full flex ">
                        <div class="w-full space-y-5 px-8 py-8">
                            <div>
                                <h3 class="text-base text-neutral-content/90 font-semibold ">Tutorial How its work</h3>
                                <hr class="mt-3">
                            </div>
                            <div>
                                <p class="text-accent-content font-medium">It is a long established fact that a reader will be distracted by the</p>
                            </div>
                            <div class="w-full pt-4">
                                <button
                                  class="px-6 drop-shadow hover:bg-tw-orange hover:text-secondary hover:border-0 rounded-full py-1 font-medium border-2 border-neutral-content text-accent-content"
                                  >View Tutorial</button
                                >
                              </div>
                        </div>
                        <div class="w-full h-full ">
                            <img src="https://www.state.gov/wp-content/uploads/2019/04/Science-Technology-shutterstock_449187505.jpg" class="rounded-r-xl object-cover w-full h-full" alt="">
                        </div>
                    </div>
                </div>

                    <!-- right-side-last-(second)-box -->
                <div class="self-end bg-secondary rounded-lg flex justify-end shadow-lg col-span-1">
                        
                        <div class="w-full flex">
                            <div class="w-full space-y-5 px-8 py-8">
                                <div>
                                    <h3 class="text-base text-neutral-content/90 font-semibold ">Tutorial How its work</h3>
                                    <hr class="mt-3">
                                </div>
                                <div>
                                    <p class="text-accent-content font-medium">It is a long established fact that a reader will be distracted by the</p>
                                </div>
                                <div class="w-full pt-4">
                                    <button
                                      class="px-6 drop-shadow hover:bg-tw-orange hover:text-secondary hover:border-0 rounded-full py-1 font-medium border-2 border-neutral-content text-accent-content"
                                      >View Tutorial</button
                                    >
                                  </div>
                            </div>
                            <div class="w-full h-full ">
                                <img src="https://www.state.gov/wp-content/uploads/2019/04/Science-Technology-shutterstock_449187505.jpg" class="rounded-r-xl object-cover w-full h-full" alt="">
                            </div>
                        </div>
                </div>



            </div>
        </div>
    </div>
</div>
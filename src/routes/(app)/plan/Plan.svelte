<script>
  import DashboardNav from "$lib/components/DashboardNav.svelte";
  import PlanModal from "$lib/components/PlanModal.svelte";
  const planData = [
        {
          title:"Essential",
          price:"69",
          tag:"",
           p1: "Carbon footprint calculation ISO 14064",
          p2:"Official carbon footprint registration",
           p3: "Reduction plan",
           p4: "Monitoring software",
           p5: "Emissions offsetting management",
           p6: "GhG report traced in Blockchain technology",
           p7: "Adherence to Race to zero",
           p8: "Communication and digital marketing toolkit",
           p9:"",
           p10:"",
           p11:""
           
        
        },
        {
          title:"Professional",
          price:"99",
         tag:"RECOMENDED",
          p1:  "Carbon footprint calculation ISO 14064",
          p2:  "Official carbon footprint registration",
          p3:  "Circularity plan",
          p4:  "Reduction plan",
          p5:  "Monitoring software",
          p6:  "Emissions offsetting management",
          p7:  "Sustainbility report",
          p8:  "GhG report traced in Blockchain technology",
          p9:  "Adherence to Race to zero",
          p10:  "Communication and digital marketing toolkit",
          p11:  "Third-party certification management"
        
        },
        {
          title:"Customized",
          span:"From",
          price:"599",
          tag:"",
          p1:  "Carbon footprint calculation ISO 14064",
          p2:  "Official carbon footprint registration",
          p3:  "Circularity plan",
          p4:  "Reduction plan",
          p5:  "Monitoring software",
          p6:  "Emissions offsetting management",
          p7:  "Sustainbility report",
          p8:  "GhG report traced in Blockchain technology",
          p9:  "Adherence to Race to zero",
          p10:  "Communication and digital marketing toolkit",
          p11:  "Third-party certification management"
        }
  ]


</script>
 <!-- <div>
  <PlanModal/>
 </div> -->

<div>
<DashboardNav title="Choose a plan"/>
<div class="w-full h-auto bg-primary pt-10 pb-32  px-4">
    <div class="flex flex-col justify-center  space-y-8  max-w-screen-xl  mx-auto ">
<div class="flex xl:grid grid-cols-3 mt-12 py-10 px-5 lg:mt-16 gap-5   lg:gap-4 overflow-hidden overflow-x-scroll xl:overflow-x-hidden">
  {#each planData as data}  
  <div class="relative false group rounded-3xl shadow-lg bg-secondary pt-7 flex flex-col text-primary-content flex-shrink-0 w-[18rem] md:w-[24rem] xl:w-full lg:min-w-[18rem]  hover:text-secondary hover:scale-105  hover:duration-[1s] hover:bg-gradient-to-t from-[#0A2C3F] to-[#14557B]">
    {#if data.tag != ""}
    <div class="absolute -top-3 left-0 flex justify-center w-full">
      <span class="bg-tw-orange px-4 py-1 text-secondary flex justify-center  w-[10rem]">{data.tag}</span>
    </div>
    {/if}
    <div
      class="  font-bold text-center pb-8 drop-shadow flex flex-col  items-center justify-center ">
      <h3 class="text-2xl group-hover:text-tw-primary font-bold">{data.title}</h3>
      <div class="flex flex-col ">
        <div class="font-medium text-tw-45 group-hover:text-tw-primary  text-primary-content">{data.price} <span class="text-2xl">€</span></div>
        <div class="text-base font-normal text-accent-content group-hover:text-tw-primary ">month</div>
      </div>
    </div>

    <div class="px-8 flex-1 space-y-3 flex flex-col justify-center group-hover:text-tw-primary">
      <!-- p1 -->
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p1}</p> 
      </div>
      <!-- p2 -->
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p2}</p> 
      </div>
      <!-- p3 -->
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p3}</p> 
      </div>
      <!-- p4 -->
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p4}</p> 
      </div>
      <!-- p5 -->
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p5}</p> 
      </div>
      <!-- p6 -->
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p6}</p> 
      </div>
      <!-- p7 -->
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p7}</p> 
      </div>
      <!-- p8 -->
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p8}</p> 
      </div>
      <!-- p9 -->
      {#if data.p9 !=""}
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p9}</p> 
      </div>
      {/if}
      <!-- p10 -->
      {#if data.p10 !=""}
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p10}</p> 
      </div>
      {/if}
      <!-- p11 -->
      {#if data.p11 !=""}
      <div class="text-base  flex space-x-1 font-normal ">
        <span class="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-success">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>          
        </span>
        <p>{data.p11}</p> 
      </div>
      {/if}
    </div>

    <div class="flex justify-center">
      <a
        href="/"
        class="my-7 border-primary-content group-hover:bg-tw-orange text-sm md:text-[22px] text-primary-content group-hover:text-tw-primary group-hover:border-0  hover:border-secontext-secondary  border rounded-full px-10 py-4 md:py-3"
        >Your plan</a
      >
    </div>
</div>
{/each}

</div>
</div>
</div>
</div>
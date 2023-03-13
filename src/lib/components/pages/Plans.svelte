<script>
  import { goto } from "$app/navigation";

  export let plans;
  let selected = plans[1];
</script>

<div class="w-full bg-primary-focus/20">
  <div class="pl-[5%] lg:px-[5%] xl:px-0 max-w-7xl mx-auto pt-20 pb-20 ">
    <!-- title box -->
    <div class="text-center text-primary-content font-light pr-[5%] lg:pr-0">
      <h3 class="text-[1.88rem] lg:text-[3rem] font-normal lg:font-light">
        {plans[0]?.title ?? ""}
      </h3>
      <h5 class="text-tw-20">
        {plans[0]?.description ?? ""}
      </h5>
    </div>

    <div class="xl:hidden mt-10 flex justify-center pr-[5%] lg:pr-0">
      {#each plans as plan}
        {#if plan.available_feature || plan.not_available_feature}
          <button
            on:click={() => (selected = plan)}
            class="{selected === plan
              ? 'border-b-[3px] border-primary-content font-bold'
              : ' border-b border-accent-content/20'} w-24 pb-2 text-primary-content text-sm capitalize">
            {plan.title}
          </button>
        {/if}
      {/each}
    </div>

    <!-- 3-grid-card-content -->
    <div
      class="flex xl:grid grid-cols-3 mt-12 lg:mt-16 gap-5 lg:gap-2 overflow-hidden">
      {#each plans as plan}
        {#if plan.available_feature || plan.not_available_feature}
          <div
            class="{selected === plan && 'order-first'}
               bg-neutral pt-3 flex flex-col text-primary-content flex-shrink-0 w-[18rem] md:w-[24rem] xl:w-full lg:min-w-[18rem] min-h-[90vh]">
            <div
              class="text-tw-30 md:text-tw-45 font-bold text-center pb-8 capitalize drop-shadow flex flex-col md:flex-row items-center justify-center md:space-x-2">
              <h3>
                {plan?.title}
              </h3>
              {#if plan?.price}
                <div>
                  <span class="font-medium">{plan.price}</span>
                  <span class="text-tw-30 mt-1 md:mt-0"> €/Mes</span>
                </div>
              {/if}
            </div>
            <div class="px-4 pb-3"><hr class="border-accent-content/20" /></div>
            <div class="px-8 flex-1">
              {#if plan.available_feature?.length > 0}
                {#each plan.available_feature as feature}
                  <p class="text-sm md:text-xl font-medium lg:leading-9">
                    ✓ {feature.text}
                  </p>
                {/each}
              {/if}
              {#if plan.not_available_feature?.length > 0}
                {#each plan.not_available_feature as feature}
                  <p class="text-sm md:text-xl font-medium lg:leading-9">
                    x {feature.text}
                  </p>
                {/each}
              {/if}
            </div>
            <div class="px-4 pt-3"><hr class="border-accent-content/20" /></div>
            <div class="flex justify-center">
              <a
                href={plan?.button_link ? `${plan?.button_link}` : "/"}
                class="my-7 border-primary-content hover:bg-tw-orange text-sm md:text-[22px] 
                text-primary-content hover:text-white hover:border-white border  rounded-full px-16 py-4 
                md:py-3 uppercase">
                {plan?.button_text ? plan?.button_text : "CHECK OUT"}
              </a>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

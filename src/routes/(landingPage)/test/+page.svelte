<script>
  import { enhance, applyAction } from '$app/forms';
  import Hero from '$lib/components/home/Hero.svelte';
  import { onMount } from 'svelte';


  async function onClick()  {
    console.log("clicked.Page.");
    // e.preventDefault();
    grecaptcha.ready(function () {
      console.log("Exicuting..");
      grecaptcha
        .execute("6Lee2iskAAAAABld9G9oz9oHSGjinZnLplCkci0X", {
          action: "submit",
        })
        .then(async function (token) {
          // Add your logic to submit to your backend server here.
          // console.log(token);
          const option ={
            method: 'POST',
            body: JSON.stringify({ token }),
            headers: {
              'content-type': 'application/json'
            }
          }
          
          let res = await fetch('/api/capctha', option)
          let data = await res.json()

          // console.log(data)
        });
    });
  }


  

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<!-- <button
  class=""
  on:click={() => {
    onClick();
  }}
>
  Test pages
</button> -->

<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js"></script>
  <script>
    function onSubmit(token) {
      console.log(token)
      document.getElementById("demo-form").submit();
    }
  </script>
</svelte:head>


<form method="post" id="demo-form">
    <input type="email" name="email" id="email">
    <input type="text" name="name" id="name">

  <button  
    type="submit">
    Submit
  </button>
  
  <div class="cursor-pointer" on:click={onClick}>
    Submit-div
  </div>

</form>



<!-- {#if data.hero_section.length > 0}
  <Hero hero={data?.hero_section[0]} />
{/if} -->


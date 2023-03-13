<script>
  import Nav from "$lib/components/Nav.svelte";
  import Content from "./Content.svelte";
  import Table from "./Table.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import ContentTwo from "./ContentTwo.svelte";
</script>

<div class="bg-white ">
  <section
    class="px-[5%] xl:px-0 max-w-7xl mx-auto  pt-8 md:pt-16 xl:pt-24 relative xl:mb-24">
    <h1
      class="text-3xl xl:text-5xl text-secondary-content font-light leading-tight drop-shadow-md text-center">
      Aviso Legal
    </h1>

    <!-- text content section -->

    <Content />
    <Table />
    <ContentTwo />
  </section>
  <!-- <Contact /> -->
</div>

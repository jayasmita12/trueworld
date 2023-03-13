<script>
  const qna = {
    question: "What is design thinking?",
    answer:
      "The term “design thinking” is often attached to maker spaces and STEM labs. However, design thinking is bigger than STEM. It begins with the premise of tapping into student curiosity and allowing them to create, test and re-create until they eventually ship what they made to a real audience.",
  };
</script>

<div>
  <div class="h-20 bg-[#D9D9D9]" />

  <div
    class="flex flex-col lg:flex-row gap-y-5 px-5 md:px-10 py-16 max-w-7xl"
  >
    <section class="lg:w-1/3 flex-shrink-0">
      <div class="lg:pr-14">
        <p class="text-[#3E4B78]/50 font-medium uppercase underline">support</p>
        <h1 class="mt-3 text-5xl text-[#27272A]">Frequently asked Questions</h1>
        <p class="mt-3 text-sm text-[#757575] underline">
          *There is no one who loves pain itself, who seeks <br /> after it and wants
          to have it
        </p>
      </div>

      <div class="lg:ml-32 mt-5 h-[0.8px] bg-[#24302C]" />
    </section>
    <div class="hidden lg:block flex-shrink-0 bg-[#24302C] w-[1px] h-[24rem]" />
    <section class="flex-1 lg:px-16">
      <details class="w-full">
        <summary
          class="text-[#27272A] text-2xl font-bold underline flex items-center justify-between w-full"
        >
          <span>
            {qna.question}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-[#F28678] rounded-full border border-[#F28678]"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
          </svg>
        </summary>
        <p class="text-[#27272A] text-xl mt-3 pb-5 border-b border-[#24302C]">
          {qna.answer}
        </p>
      </details>
    </section>
  </div>
</div>

<style>
  details summary {
    list-style: none;
  }
  details summary svg {
    display: none;
  }
  details[open] summary svg {
    display: block;
  }
  details summary::-webkit-details-marker {
    display: none;
  }
</style>

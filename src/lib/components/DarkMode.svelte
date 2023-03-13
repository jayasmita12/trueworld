<script>
  import { isDark } from "$lib/stores/globalStore";

  const changeTheme = () => {
    document.documentElement.dataset.theme = $isDark ? "light" : "dark";
    let theme = $isDark ? "light" : "dark";
    document.cookie = `theme=${theme};max-age=31536000;path="/"`;
    localStorage.setItem("theme", `${theme}`);
  };
</script>

<div class="flex space-x-0.5 items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-[0.95rem] h-[0.95rem] md:w-5 md:h-5 text-primary-content">
    <path
      d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>

  <input
    on:change={changeTheme}
    bind:checked={$isDark}
    data-toggle-theme="light,dark"
    data-act-class="ACTIVECLASS"
    type="checkbox"
    class="toggle toggle-sm bg-primary" />
  <!-- <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" /> -->
  <svg
    class="w-[0.95rem] h-[0.95rem] md:w-5 md:h-5 text-primary-content"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
</div>

import { c as create_ssr_component } from "../../../../chunks/index3.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `

${$$result.head += `<!-- HEAD_svelte-1ynkc8r_START --><script src="https://www.google.com/recaptcha/api.js"><\/script><script>function onSubmit(token) {
      console.log(token)
      document.getElementById("demo-form").submit();
    }
  <\/script><!-- HEAD_svelte-1ynkc8r_END -->`, ""}


<form method="post" id="demo-form"><input type="email" name="email" id="email">
    <input type="text" name="name" id="name">

  <button type="submit">Submit
  </button>
  
  <div class="cursor-pointer">Submit-div
  </div></form>



`;
});
export {
  Page as default
};

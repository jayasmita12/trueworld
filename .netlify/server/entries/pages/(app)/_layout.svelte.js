import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { N as Nav } from "../../../chunks/Nav.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

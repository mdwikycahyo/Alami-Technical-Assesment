import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `<div class="flex flex-col h-screen relative overflow-y-auto"><div class="p-7 sticky top-0 z-10 bg-[#F9F9F9]"><nav id="navbar" class="flex justify-end"><ul class="flex space-x-2"><li><div role="button" tabindex="0"${add_attribute("class", `font-roboto mx-8 text-2xl relative group ${"font-bold"} duration-300 cursor-pointer`, 0)}>HOME
						<span${add_attribute(
    "class",
    `absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${"border-yellow-500"} group-hover:border-yellow-500 transition-all duration-300`,
    0
  )}></span></div></li> <li><div role="button" tabindex="0"${add_attribute(
    "class",
    `font-roboto mx-8 text-2xl relative group ${"hover:font-bold"}  duration-300 cursor-pointer`,
    0
  )}>PROJECTS
						<span${add_attribute(
    "class",
    `absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${"group-hover:border-yellow-500"}  transition-all duration-300`,
    0
  )}></span></div></li> <li><div role="button" tabindex="0"${add_attribute(
    "class",
    `font-roboto mx-8 text-2xl relative group ${"hover:font-bold"}  duration-300 cursor-pointer`,
    0
  )}>ARTICLES
						<span${add_attribute(
    "class",
    `absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${"group-hover:border-yellow-500"}  transition-all duration-300`,
    0
  )}></span></div></li> <li><div role="button" tabindex="0"${add_attribute(
    "class",
    `font-roboto mx-8 text-2xl relative group ${"hover:font-bold"}  duration-300 cursor-pointer`,
    0
  )}>CONTACT
						<span${add_attribute(
    "class",
    `absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${"group-hover:border-yellow-500"}  transition-all duration-300`,
    0
  )}></span></div></li></ul></nav></div> ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};

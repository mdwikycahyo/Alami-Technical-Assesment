import { c as create_ssr_component, e as escape, f as each } from "../../chunks/ssr.js";
const username = "Dwiky";
const summary = "a <strong>Software Developer</strong> from Indonesia <br /> By day, I'm working as a <strong>Frontend Developer</strong>, but my curiosity for software development goes far beyond";
const linkedin = "https://www.linkedin.com/in/mdwikycahyow/";
const github = "https://github.com/mdwikycahyo";
const medium = "https://medium.com/@mdwikycahyo";
const instagram = "https://www.instagram.com/mdwikycahyo_/";
const email = "mdwikycahyo@gmail.com";
const whatsapp = "https://wa.me/6282164957664";
const projects = [
  {
    name: "WhatsApp Chatbot",
    year: 2023,
    description: "This chatbot helps merchants easily top up their account balance using WhatsApp. They can use the balance to assist users in paying electricity bills, fiber optic bills, and other household transactions. The chatbot automatically responds to WhatsApp messages, making it convenient for merchants without the need for a separate app.",
    techStacks: "NodeJs, DigitalOcean, Whatsapp Webhook",
    url: "/project/wa-chatbot"
  },
  {
    name: "Amazon Clone",
    year: 2021,
    description: "Using Fake Store 3rd Party API to clone Amazon.com e-commerce web",
    techStacks: "React, Redux, Firebase",
    url: "https://clone-58f35.web.app/"
  },
  {
    name: "GeeHive",
    year: 2021,
    description: "Gift recommendation app based on user input",
    techStacks: "Vue.js, Vuex, Express, PosgreSQL, Firebase, Heroku",
    url: "https://geehive.web.app/"
  }
];
const articles = [
  {
    name: "Measuring Engineer’s Productivity (?)",
    date: "Oct 7, 2023",
    description: "This article discusses McKinsey's approach to measuring developer productivity, which has prompted responses from software development elites to share their valuable perspective",
    url: "https://medium.com/@mdwikycahyo/measuring-engineers-productivity-0098feb6dac5"
  },
  {
    name: "How Internet Works",
    date: "Nov 6, 2022",
    description: "In this article, I'm trying to explain how the internet works in an easy-to-understand way, using simple analogy and examples.",
    url: "https://medium.com/@mdwikycahyo/how-internet-works-explained-for-non-technical-person-6febcf99f4b"
  },
  {
    name: "How to set up Svelte using Vite and Tailwind CSS",
    date: "Jul 1, 2022",
    description: "This article provides instructions on configuring Svelte with Vite and Tailwind CSS, gives the readers the first step to play around with those frontend technology",
    url: "https://medium.com/@mdwikycahyo/how-to-set-up-svelte-using-vite-and-tailwind-css-617040ebccec"
  }
];
const closingStatement = "I’m available for <strong>Part-Time</strong> and <strong>Freelance work</strong>.";
const data = {
  username,
  summary,
  linkedin,
  github,
  medium,
  instagram,
  email,
  whatsapp,
  projects,
  articles,
  closingStatement
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="container" class="flex-1 overflow-y-auto"><div id="home" class="ml-36 w-3/4 h-full flex items-center"><div><h1 class="text-6xl font-bold leading-normal font-mono">Hi, I&#39;m ${escape(data.username)}!</h1> <p class="leading-10 text-xl"><!-- HTML_TAG_START -->${data.summary}<!-- HTML_TAG_END --></p> <div class="mt-4"><i role="button" tabindex="0" class="bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer"></i> <i role="button" tabindex="0" class="bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"></i> <i role="button" tabindex="0" class="bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer"></i></div></div></div> <div id="projects" class="my-20">${each(data.projects, (project) => {
    return `<div class="flex justify-between my-10"><div class="w-10/12"><div class="flex items-center"><div class="w-36 h-0.5 bg-black"></div> <h1 class="text-xl mx-6 font-mono">${escape(project.year)}</h1> <h1 class="text-3xl font-bold font-mono">${escape(project.name)}</h1></div> <div class="flex justify-between"><div class="ml-60"><p class="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">${escape(project.description)}</p> <p class="leading-10 text-lg font-extralight">${escape(project.techStacks)} </p></div> </div></div> <div class="w-1/4 flex items-center justify-center">${project.name === "WhatsApp Chatbot" ? `<a class="flex items-center justify-center cursor-pointer hover:font-bold" href="/project/wa-chatbot" data-svelte-h="svelte-1w7n4dp"><div class="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]"></div> <p class="-ml-[25px] mr-2 font-mono">View Details</p> <i class="bi bi-arrow-right text-yellow-500 text-3xl"></i> </a>` : `<div class="flex items-center justify-center cursor-pointer hover:font-bold" role="button" tabindex="0" data-svelte-h="svelte-4mur36"><div class="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]"></div> <p class="-ml-[25px] mr-2 font-mono">Visit Website</p> <i class="bi bi-arrow-right text-yellow-500 text-3xl"></i> </div>`}</div> </div>`;
  })}</div> <div id="articles" class="my-20">${each(data.articles, (article) => {
    return `<div class="flex justify-between my-14"><div class="w-10/12"><div class="flex items-center"><div class="w-36 h-0.5 bg-black"></div> <h1 class="text-xl mx-6 font-mono">${escape(article.date)}</h1></div> <div class="flex justify-between"><div class="ml-[167px]"><h1 class="text-3xl leading-relaxed font-bold font-mono">${escape(article.name)}</h1> <p class="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">${escape(article.description)} </p></div> </div></div> <div class="w-1/4 flex items-center justify-center"><div class="flex items-center justify-center cursor-pointer hover:font-bold" role="button" tabindex="0" data-svelte-h="svelte-gam77l"><div class="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]"></div> <p class="-ml-[25px] mr-2 font-mono">Read More</p> <i class="bi bi-arrow-right text-yellow-500 text-3xl"></i> </div></div> </div>`;
  })}</div> <div id="contact" class="mt-20 bg-black text-white item-center flex flex-col items-center"><h1 class="text-6xl mt-14 font-bold leading-normal" data-svelte-h="svelte-ruzi1f">Let&#39;s Work Together</h1> <p class="leading-10 text-xl mb-14"><!-- HTML_TAG_START -->${data.closingStatement}<!-- HTML_TAG_END --></p> <div class="w-1/4 flex items-center justify-center mb-14"><div class="flex items-center justify-center cursor-pointer hover:font-bold" role="button" tabindex="0" data-svelte-h="svelte-xj98a6"><div class="bg-[#363636] rounded-full w-[50px] h-[50px]"></div> <p class="-ml-[25px] mr-2 font-mono">Say Hello!</p> <i class="bi bi-arrow-right text-yellow-500 text-3xl"></i></div></div> <div class="mt-4 flex items-center my-5"><p data-svelte-h="svelte-1kei1mu">© 2023 Muhammad Dwiky Cahyo Wicaksono</p> <p class="mx-20" data-svelte-h="svelte-ytm4ir">|</p> <p><i class="bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer mr-5" role="button" tabindex="0"></i> <i class="bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5" role="button" tabindex="0"></i> <i class="bi bi-instagram text-3xl hover:text-4xl duration-300 cursor-pointer mx-5" role="button" tabindex="0"></i> <i class="bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer mx-5" role="button" tabindex="0"></i> <i class="bi bi-envelope-fill text-3xl hover:text-4xl duration-300 cursor-pointer mx-5" role="button" tabindex="0"></i></p></div></div></div>`;
});
export {
  Page as default
};

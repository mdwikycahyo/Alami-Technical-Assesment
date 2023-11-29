

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/project/wa-chatbot/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4df5d6ef.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.dfd2e48c.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.cbe8329f.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.dfd2e48c.js"];
export const stylesheets = ["_app/immutable/assets/0.1fda1808.css"];
export const fonts = [];

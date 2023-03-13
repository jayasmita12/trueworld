import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-29a0a3f2.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-29a0a3f2.js","_app/immutable/chunks/index-6416d62d.js","_app/immutable/chunks/navigation-ae603949.js","_app/immutable/chunks/singletons-c658488f.js","_app/immutable/chunks/index-9f0e3743.js","_app/immutable/chunks/globalStore-c8c8425c.js"];
export const stylesheets = ["_app/immutable/assets/_layout-499282cf.css"];
export const fonts = [];

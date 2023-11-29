export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e533003e.js","app":"_app/immutable/entry/app.6595b3f5.js","imports":["_app/immutable/entry/start.e533003e.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.78443cdd.js","_app/immutable/entry/app.6595b3f5.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.dfd2e48c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/project/wa-chatbot",
				pattern: /^\/project\/wa-chatbot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

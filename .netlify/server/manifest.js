export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["signup/apple.png","signup/check.png","signup/eye.png","signup/facebook.png","signup/google.png","signup/microsoft.png","signup/user.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-ec52746e.js","imports":["_app/immutable/start-ec52746e.js","_app/immutable/chunks/index-6416d62d.js","_app/immutable/chunks/singletons-c658488f.js","_app/immutable/chunks/index-9f0e3743.js","_app/immutable/chunks/parse-d12b0d5b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js')
		],
		routes: [
			{
				id: "/(landingPage)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,4], leaf: 16 },
				endpoint: null
			},
			{
				id: "/api/capctha",
				pattern: /^\/api\/capctha\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/capctha/_server.js')
			},
			{
				id: "/api/getPageData",
				pattern: /^\/api\/getPageData\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/getPageData/_server.js')
			},
			{
				id: "/api/navFooter",
				pattern: /^\/api\/navFooter\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/navFooter/_server.js')
			},
			{
				id: "/api/otpRecovery",
				pattern: /^\/api\/otpRecovery\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/otpRecovery/_server.js')
			},
			{
				id: "/api/recoveryPassword",
				pattern: /^\/api\/recoveryPassword\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/recoveryPassword/_server.js')
			},
			{
				id: "/api/recoveryemail",
				pattern: /^\/api\/recoveryemail\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/recoveryemail/_server.js')
			},
			{
				id: "/api/signupWithEmail",
				pattern: /^\/api\/signupWithEmail\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/signupWithEmail/_server.js')
			},
			{
				id: "/api/updateProfile",
				pattern: /^\/api\/updateProfile\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/updateProfile/_server.js')
			},
			{
				id: "/api/verifyEmail",
				pattern: /^\/api\/verifyEmail\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/verifyEmail/_server.js')
			},
			{
				id: "/api/verifyPassword",
				pattern: /^\/api\/verifyPassword\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/verifyPassword/_server.js')
			},
			{
				id: "/(app)/avaliableTools",
				pattern: /^\/avaliableTools\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(landingPage)/carbon-footprint",
				pattern: /^\/carbon-footprint\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,4], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(landingPage)/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,4], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(landingPage)/legal-policy",
				pattern: /^\/legal-policy\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,4], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/plan",
				pattern: /^\/plan\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(landingPage)/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,4], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(app)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/recoveryEmail",
				pattern: /^\/recoveryEmail\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/recoveryPassword",
				pattern: /^\/recoveryPassword\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/signupWithEmail",
				pattern: /^\/signupWithEmail\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(landingPage)/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,4], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(landingPage)/[page]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,,], errors: [1,4,5], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(landingPage)/[page]/[slug]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,,,], errors: [1,4,5,6], leaf: 23 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./index3.js";
const base = "";
let assets = "";
function set_assets(path) {
  assets = path;
}
let version = "";
let public_env = {};
function set_building(value) {
}
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_version(value) {
  version = value;
}
function afterUpdate() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
set_version("1678732211438");
const options = {
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="en" data-theme="dark" class="bg-primary">\r\n  <head>\r\n    <meta charset="utf-8" />\r\n    <link rel="icon" href="' + assets2 + '/favicon.ico" />\r\n    <meta name="viewport" content="width=device-width" />\r\n\r\n    <!-- <script src="https://www.google.com/recaptcha/api.js"><\/script> -->\r\n    <script src="https://www.google.com/recaptcha/api.js?render=6Lee2iskAAAAABld9G9oz9oHSGjinZnLplCkci0X"><\/script>\r\n\r\n    <!-- <link rel="manifest" crossorigin="use-credentials" href="manifest.json" /> -->\r\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\r\n    <meta name="theme-color" content="#ffff" />\r\n    <meta name="theme-color" content="#F5F5F5" media="(prefers-color-scheme: light)">\r\n    <meta name="theme-color" content="#2F2F2F" media="(prefers-color-scheme: dark)">\r\n\r\n    <!-- <meta name="msapplication-square70x70logo" content="/generated/mstile-icon-128.png">\r\n	<meta name="msapplication-square150x150logo" content="/generated/mstile-icon-270.png">\r\n	<meta name="msapplication-square310x310logo" content="/generated/mstile-icon-558.png">\r\n	<meta name="msapplication-wide310x150logo" content="/generated/mstile-icon-558-270.png"> -->\r\n\r\n    <!-- <link rel="apple-touch-icon" href="/generated/apple-icon-180.png"> -->\r\n\r\n    <meta name="apple-mobile-web-app-capable" content="yes" />\r\n\r\n    <!-- <link rel="shortcut icon" type="image/svg" href="/generated/apple-icon-180.png"> -->\r\n    <meta name="apple-mobile-web-app-status-bar-style" content="black" />\r\n    <meta name="apple-mobile-web-app-title" content="TRUEWORLD" />\r\n    <meta name="application-name" content="TRUEWORLD" />\r\n    <meta name="mobile-web-app-capable" content="yes" />\r\n\r\n    <!-- PWA -->\r\n    <!-- <link rel="manifest" crossorigin="use-credentials" href="/manifest.json"> -->\r\n    <!-- <meta name="msapplication-config" content="/browserconfig.xml" /> -->\r\n    <meta name="msapplication-TileColor" content="#ffff" />\r\n\r\n    <!-- Primary Meta Tags -->\r\n    <meta name="title" content="TRUEWORLD" />\r\n    <meta name="description" content="Blockchain: Realtime monitoring" />\r\n\r\n    <!-- Open Graph / Facebook -->\r\n    <meta property="og:type" content="website" />\r\n    <meta property="og:url" content="https://trueworld.com" />\r\n    <meta property="og:title" content="TRUEWORLD" />\r\n    <meta property="og:description" content="Blockchain: Realtime monitoring" />\r\n    <meta property="og:image" content="' + assets2 + '/screenshot.jpg" />\r\n    <meta property="og:site_name" content="TRUEWORLD" />\r\n    <meta property="og:keywords" content="Your Gateway to the Metaverse" />\r\n\r\n    <!-- Site Verification -->\r\n    <!-- <meta property="fb:admins" content="1216345021" />\r\n	<meta name="google-site-verification" content="nubQ83kz2YYRrleJaYf_CYbvDZ6lXVl-NL_MWX1Uj9Y" />\r\n	<meta name="msvalidate.01" content="330DC90484A4B7B61B36AD65E89B47AE" /> -->\r\n\r\n    <!-- Twitter -->\r\n    <meta property="twitter:card" content="summary_large_image" />\r\n    <meta property="twitter:url" content="https://trueworld.com" />\r\n    <meta property="twitter:title" content="TRUEWORLD" />\r\n    <meta\r\n      property="twitter:description"\r\n      content="Your Gateway to the Metaverse" />\r\n    <meta\r\n      property="twitter:image"\r\n      content="https://trueworld.com/screenshot.jpg" />\r\n    <meta property="twitter:site" content="@TRUEWORLD" />\r\n    <meta property="twitter:site:id" content="@TRUEWORLD" />\r\n    <meta property="twitter:creator" content="@TRUEWORLD" />\r\n    <meta property="twitter:creator:id" content="@TRUEWORLD" />\r\n\r\n    ' + head + '\r\n  </head>\r\n  <body class="bg-primary" data-sveltekit-preload-data="hover">\r\n    <div style="display: contents">' + body + '</div>\r\n  </body>\r\n  <script>\r\n    function onSubmit(token) {\r\n      document.getElementById("contact-form").submit();\r\n    }\r\n  <\/script>\r\n</html>\r\n',
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  }
};
function get_hooks() {
  return import("./hooks.server.js");
}
export {
  assets as a,
  base as b,
  set_assets as c,
  set_building as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  set_public_env as s,
  version as v
};

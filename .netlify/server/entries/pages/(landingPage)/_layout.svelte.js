import { c as create_ssr_component, b as add_attribute, a as subscribe, v as validate_component, e as escape, d as each } from "../../../chunks/index3.js";
import { l as localeCode, f as footerStore } from "../../../chunks/globalStore.js";
import { p as page } from "../../../chunks/stores.js";
import { B as BlockchainLogo } from "../../../chunks/BlockchainLogo.js";
import { L as Logo } from "../../../chunks/Logo.js";
import { N as Nav } from "../../../chunks/Nav.js";
const SocialMediaIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { socialMediaLinks } = $$props;
  if ($$props.socialMediaLinks === void 0 && $$bindings.socialMediaLinks && socialMediaLinks !== void 0)
    $$bindings.socialMediaLinks(socialMediaLinks);
  return `<div class="col-span-3 flex items-center space-x-1 md:space-x-2">

  
  <a${add_attribute("href", socialMediaLinks[0]?.address, 0)} target="_blank" rel="noreferrer"><svg class="h-[1.563rem]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><defs><clipPath id="clip-Linkediin"><rect width="44" height="44"></rect></clipPath></defs><g id="Linkediin" clip-path="url(#clip-Linkediin)"><path id="Trazado_8531" data-name="Trazado 8531" d="M19.194,2.57h2.559a2.263,2.263,0,0,0,.308.065,19.5,19.5,0,0,1,8.891,2.827,20.209,20.209,0,0,1,9.681,14.053c.138.743.211,1.5.314,2.248v2.559c-.033.262-.069.525-.1.788A20.525,20.525,0,0,1,24.039,43.2c-.756.138-1.524.213-2.286.317H19.194c-.5-.061-1-.115-1.5-.186A20.52,20.52,0,0,1,.318,26.611C.181,25.854.1,25.086,0,24.323V21.764c.032-.262.068-.524.1-.787A20.154,20.154,0,0,1,5.1,9.536,20.06,20.06,0,0,1,16.986,2.879c.732-.128,1.472-.207,2.208-.309m3.073,30.936c0-1.288,0-2.539,0-3.79.006-1.692,0-3.384.036-5.076a2.569,2.569,0,0,1,1.253-2.118,2.4,2.4,0,0,1,3.735,1.346,6.679,6.679,0,0,1,.213,1.734c.022,2.491.01,4.983.01,7.475v.417h4.967c.006-.131.016-.236.016-.342,0-2.732.006-5.463,0-8.195a14.339,14.339,0,0,0-.106-1.633,5.352,5.352,0,0,0-4.936-5.115,4.96,4.96,0,0,0-4.977,2.134,2.781,2.781,0,0,1-.208.223c0-.618-.015-1.147.006-1.675.012-.3-.078-.39-.381-.387-1.426.015-2.851.006-4.277.008a2.949,2.949,0,0,0-.3.031V33.506Zm-7.758,0c.009-.1.019-.166.019-.231q0-7.217.007-14.433c0-.31-.139-.339-.387-.337-1.413.007-2.825,0-4.238,0-.116,0-.231.017-.348.026v14.97ZM9.251,13.883a2.588,2.588,0,0,0,2.786,2.592,2.6,2.6,0,1,0,.039-5.187,2.6,2.6,0,0,0-2.824,2.595" transform="translate(1.525 -0.57)" class="fill-base-200"></path></g></svg></a>
  
  <a${add_attribute("href", socialMediaLinks[1]?.address, 0)} target="_blank" rel="noreferrer"><svg class="h-[1.563rem]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><defs><clipPath id="clip-IG"><rect width="44" height="44"></rect></clipPath></defs><g id="IG" clip-path="url(#clip-IG)"><g id="Grupo_15222" data-name="Grupo 15222" transform="translate(20793.102 -8076.701)"><path id="Trazado_8528" data-name="Trazado 8528" d="M488.325,2.57h2.554a2.259,2.259,0,0,0,.307.065,19.456,19.456,0,0,1,8.874,2.822,20.169,20.169,0,0,1,9.662,14.025c.138.742.211,1.5.313,2.244v2.554a2.274,2.274,0,0,0-.066.309,20.424,20.424,0,0,1-23.1,18.667,20.475,20.475,0,0,1-17.6-22.3A19.723,19.723,0,0,1,474.284,9.5a20.017,20.017,0,0,1,11.837-6.619c.731-.127,1.47-.207,2.2-.308M501.4,23.013c-.073-1.938-.062-3.9-.241-5.842a5.968,5.968,0,0,0-3.562-5.156,7.3,7.3,0,0,0-3.018-.66c-2.766-.039-5.532-.073-8.3-.062a18,18,0,0,0-3.017.231,5.852,5.852,0,0,0-4.863,4.084,8.248,8.248,0,0,0-.429,2.38c-.072,2.778-.078,5.559-.08,8.338a25,25,0,0,0,.147,2.547,6.079,6.079,0,0,0,5.288,5.609,31.409,31.409,0,0,0,4.454.235c2.552,0,5.111.013,7.654-.165a6.08,6.08,0,0,0,5.732-5.744c.16-1.919.16-3.851.233-5.8" transform="translate(-21260.703 8076.131)" class="fill-base-200"></path><path id="Trazado_8529" data-name="Trazado 8529" d="M567.58,111.522c.052-1.8.059-3.571.165-5.335a4.079,4.079,0,0,1,4.153-4.143q5.319-.141,10.644,0a4.022,4.022,0,0,1,4.176,4.19c.1,3.559.082,7.125-.008,10.685a3.845,3.845,0,0,1-2.758,3.808,7.409,7.409,0,0,1-2.192.349c-3.018.038-6.037.044-9.054,0a7.436,7.436,0,0,1-2.376-.421,3.907,3.907,0,0,1-2.577-3.737c-.119-1.8-.121-3.613-.172-5.389m15.678.007a6.021,6.021,0,1,0-6.047,6.015,6.01,6.01,0,0,0,6.047-6.015m1.645-6.285a1.4,1.4,0,1,0-1.367,1.416,1.4,1.4,0,0,0,1.367-1.416" transform="translate(-21348.379 7987.61)" class="fill-base-200"></path><path id="Trazado_8530" data-name="Trazado 8530" d="M624,161.311a3.91,3.91,0,1,1,3.9-3.913,3.918,3.918,0,0,1-3.9,3.913" transform="translate(-21395.127 7941.731)" class="fill-base-200"></path></g></g></svg></a>

  
  <a${add_attribute("href", socialMediaLinks[2]?.address, 0)} target="_blank" rel="noreferrer"><svg class="h-[1.563rem]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><defs><clipPath id="clip-facebook"><rect width="44" height="44"></rect></clipPath></defs><g id="facebook" clip-path="url(#clip-facebook)"><path id="Trazado_8532" data-name="Trazado 8532" d="M978.133,21.883v2.4c-.023.128-.051.256-.07.384-.155,1.014-.222,2.051-.475,3.04A20.215,20.215,0,0,1,963.8,42.624c-1.174.4-2.422.6-3.666.893V27.352h4.911l.741-5.725h-5.661c0-1.425-.021-2.8.014-4.174a2.906,2.906,0,0,1,.3-1.15,2.021,2.021,0,0,1,1.89-1.065c1.066-.053,2.136-.04,3.2-.058.141,0,.281-.014.446-.022,0-1.648,0-3.249-.012-4.851a.4.4,0,0,0-.277-.268c-1.614-.072-3.23-.2-4.842-.16a6.641,6.641,0,0,0-4.235,1.575,6.857,6.857,0,0,0-2.367,5.118c-.081,1.519-.044,3.044-.06,4.567,0,.155,0,.311,0,.511h-4.91v5.734h4.888V43.255a.4.4,0,0,1-.1.021,1.55,1.55,0,0,1-.158-.025,20.377,20.377,0,0,1-8.859-3.976,20.031,20.031,0,0,1-6.742-9.26,20.176,20.176,0,0,1,.29-14.633,20.563,20.563,0,0,1,18.268-12.8A19.922,19.922,0,0,1,967.3,5.012a20.208,20.208,0,0,1,10.512,14.54c.146.769.214,1.553.318,2.331" transform="translate(-935.603 -0.57)" class="fill-base-200"></path></g></svg></a>
  
  <a${add_attribute("href", socialMediaLinks[3]?.address, 0)} target="_blank" rel="noreferrer"><svg class="h-[1.563rem]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><defs><clipPath id="clip-Twitter"><rect width="44" height="44"></rect></clipPath></defs><g id="Twitter" clip-path="url(#clip-Twitter)"><path id="Trazado_8527" data-name="Trazado 8527" d="M1407.6,24.187V21.645c.024-.128.052-.256.071-.385.124-.85.193-1.712.376-2.548a19.94,19.94,0,0,1,8.528-12.637,19.771,19.771,0,0,1,14.67-3.225,19.48,19.48,0,0,1,10.11,4.8,19.935,19.935,0,0,1,6.916,14.8,19.291,19.291,0,0,1-2.828,10.788,20.08,20.08,0,0,1-14,9.7c-.737.139-1.488.209-2.232.312h-2.543c-.5-.061-.994-.114-1.489-.185a20.423,20.423,0,0,1-17.265-16.61c-.137-.752-.213-1.515-.317-2.272m29.245-7.588-.05-.1a4.714,4.714,0,0,0,1.868-2.366c-.866.306-1.731.609-2.594.917a.491.491,0,0,1-.557-.149,4.656,4.656,0,0,0-7.716,2.341,13.919,13.919,0,0,0-.163,2.142,13.345,13.345,0,0,1-9.513-4.865,4.379,4.379,0,0,0-.629,2.484,4.69,4.69,0,0,0,1.964,3.684l-.059.113-1.927-.537c-.106,1.934,1.062,3.44,3.539,4.631h-1.933a4.846,4.846,0,0,0,4.348,3.28A9.612,9.612,0,0,1,1416.6,30.1c.146.1.187.133.231.159a12.971,12.971,0,0,0,12.763.583c4.912-2.414,7.234-6.617,7.419-12.031a1.049,1.049,0,0,1,.454-.912,8.04,8.04,0,0,0,1.8-1.955l-2.421.651" transform="translate(-1405.604 -0.57)" class="fill-base-200"></path></g></svg></a>
  
  <a${add_attribute("href", socialMediaLinks[4]?.address, 0)} target="_blank" rel="noreferrer"><svg class="h-[1.563rem]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><defs><clipPath id="clip-YouTube"><rect width="44" height="44"></rect></clipPath></defs><g id="YouTube" clip-path="url(#clip-YouTube)"><g id="Grupo_15223" data-name="Grupo 15223" transform="translate(20640.715 -8076.418)"><path id="Trazado_8525" data-name="Trazado 8525" d="M1896.03,0h2.537a2.256,2.256,0,0,0,.305.065,18.7,18.7,0,0,1,8.608,2.7c7.248,4.516,10.625,11.084,10,19.614a18.982,18.982,0,0,1-4.425,10.768,19.973,19.973,0,0,1-12.218,7.215c-.75.137-1.511.212-2.267.315h-2.537c-.5-.061-.992-.114-1.486-.184a19.885,19.885,0,0,1-10.032-4.372,20.04,20.04,0,0,1-7.2-12.237c-.136-.752-.212-1.515-.315-2.273V19.066c.032-.261.067-.521.1-.782a20.041,20.041,0,0,1,4.964-11.365A19.878,19.878,0,0,1,1893.841.307C1894.566.18,1895.3.1,1896.03,0m1.208,11.352c0,.03,0,.061,0,.091-.3,0-.608-.012-.911,0-2.769.129-5.541.221-8.307.412a3.037,3.037,0,0,0-2.924,2.669,37.508,37.508,0,0,0-.429,4.178,33.049,33.049,0,0,0,.345,7.124,3.249,3.249,0,0,0,3.161,3c1.154.126,2.315.22,3.475.27a112.74,112.74,0,0,0,14.374-.194c2.278-.192,3.315-1.15,3.631-3.393a34.823,34.823,0,0,0,.287-6.892,35.851,35.851,0,0,0-.454-4.214,2.989,2.989,0,0,0-2.56-2.487,7.6,7.6,0,0,0-1.136-.16c-2.849-.144-5.7-.274-8.547-.409" transform="translate(-22515.715 8078.418)" class="fill-base-200"></path><path id="Trazado_8526" data-name="Trazado 8526" d="M2046.071,154.85l-6.586,3.8v-7.6l6.586,3.8" transform="translate(-22661.135 7943.907)" class="fill-base-200"></path></g></g></svg></a>

  
  <a href="/"><svg class="h-[1.563rem]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><defs><clipPath id="clip-path"><rect id="Rectángulo_4007" data-name="Rectángulo 4007" width="41.824" height="41.824" class="fill-base-200"></rect></clipPath><clipPath id="clip-We_don_t_have_time"><rect width="44" height="44"></rect></clipPath></defs><g id="We_don_t_have_time" data-name="We don’t have time" clip-path="url(#clip-We_don_t_have_time)"><g id="Grupo_15224" data-name="Grupo 15224" transform="translate(1.088 1.088)"><g id="Grupo_14628" data-name="Grupo 14628" transform="translate(0 0)" clip-path="url(#clip-path)"><path id="Trazado_8534" data-name="Trazado 8534" d="M20.079,0h1.74c.065.01.13.022.2.029.708.073,1.423.107,2.124.222a20.65,20.65,0,0,1,13.972,8.7A20.386,20.386,0,0,1,41.8,18.91c.039.389.068.779.1,1.169v1.74c-.01.071-.023.141-.03.212-.072.7-.106,1.411-.221,2.106A20.651,20.651,0,0,1,32.935,38.12,20.384,20.384,0,0,1,22.989,41.8c-.39.039-.78.068-1.171.1h-1.74c-.065-.01-.13-.022-.2-.029-.708-.073-1.423-.107-2.124-.222a20.65,20.65,0,0,1-13.972-8.7A20.386,20.386,0,0,1,.1,22.987C.063,22.6.034,22.208,0,21.818v-1.74c.01-.071.023-.141.03-.212.072-.7.107-1.411.221-2.106A20.651,20.651,0,0,1,8.962,3.778,20.384,20.384,0,0,1,18.908.1c.39-.039.78-.068,1.171-.1M9.474,11.388c-.15-.342-.3-.719-.479-1.078a1.223,1.223,0,0,0-.362-.433.9.9,0,0,0-1.063.073.913.913,0,0,0-.244,1.023q.2.5.43.995c.062.132.054.187-.081.278-.551.375-1.106.748-1.62,1.17a9.078,9.078,0,0,0-2.184,2.693,10.07,10.07,0,0,0,1.457,11.68,9.615,9.615,0,0,0,2.4,1.887,9.946,9.946,0,0,0,6.835,1.1c.407-.074.806-.192,1.222-.293.024.049.051.1.075.156q.217.5.433.993a.9.9,0,1,0,1.634-.766c-.254-.6-.523-1.191-.767-1.793a.935.935,0,0,0-1.34-.564,8.169,8.169,0,0,1-9.66-2.552A7.86,7.86,0,0,1,4.482,20.2a7.978,7.978,0,0,1,3.878-6.238,7.9,7.9,0,0,1,6.221-.99,13.993,13.993,0,0,1,1.352.452.953.953,0,0,0,1.051-.271.929.929,0,0,0-.414-1.433,9.931,9.931,0,0,0-5.224-.7c-.619.083-1.227.241-1.872.371m2.259,5.193c-.2-.46-.38-.878-.558-1.3a.909.909,0,1,0-1.675.7q1.15,2.661,2.31,5.317a.97.97,0,0,0,.27.353.863.863,0,0,0,.984.095.888.888,0,0,0,.485-.863c0-1.352,0-2.7,0-4.057a2.1,2.1,0,0,0-.013-.253.9.9,0,0,0-1.373-.645,1.025,1.025,0,0,0-.425.65m10.931-3.738H22.7l.634,2.121h1.2c.018-.046.039-.089.053-.134.2-.658.384-1.32.6-1.973a4.908,4.908,0,0,1,.57-1.513c.122-.164.228-.339.337-.512.069-.108.13-.221.2-.346H24.7c.034.076.055.137.086.193.154.279.3.56.471.832a.358.358,0,0,1,.028.322c-.149.484-.292.969-.438,1.454-.079.263-.16.525-.253.831-.3-1.019-.586-1.989-.864-2.962a.423.423,0,0,1,.043-.239c.055-.143.124-.28.193-.43H21.914l.065.182c.15.418.294.839.454,1.254a1.254,1.254,0,0,1,.022.958c-.153.39-.257.8-.388,1.22a.432.432,0,0,1-.041-.068c-.278-.949-.557-1.9-.827-2.847a.451.451,0,0,1,.031-.255c.053-.148.126-.288.2-.445h-2.08a.736.736,0,0,0,.047.144,7.676,7.676,0,0,1,.631,1.747c.245.814.482,1.63.73,2.443.018.059.088.143.136.145.367.012.735.007,1.108.007l.665-2.125M20.21,25.533h2.235c0-.025,0-.04,0-.048a.435.435,0,0,0-.063-.088,1.108,1.108,0,0,1-.316-.953c.026-.365.006-.733.006-1.1h1.193c0,.54,0,1.064,0,1.588a.431.431,0,0,1-.1.2c-.091.13-.19.254-.3.4h2.273c-.087-.115-.147-.211-.222-.293a.756.756,0,0,1-.195-.559q.016-1.386,0-2.772a.73.73,0,0,1,.189-.542,3.4,3.4,0,0,0,.221-.3H22.875c.017.037.021.064.036.078A1.263,1.263,0,0,1,23.27,22.3c-.01.1,0,.205,0,.308v.54H22.091a.238.238,0,0,1-.02-.06c0-.459-.006-.918,0-1.377a.465.465,0,0,1,.095-.225c.092-.137.2-.266.309-.418H20.21c.116.154.222.276.305.412a.615.615,0,0,1,.1.294q.011,1.513,0,3.026a.709.709,0,0,1-.112.328,4.561,4.561,0,0,1-.3.4m9.838,2.734a1.117,1.117,0,0,0-2.005-.1v-.512h-1.6a1.4,1.4,0,0,0,.113.161.733.733,0,0,1,.187.562c-.013.61,0,1.22-.011,1.83a1.049,1.049,0,0,1-.128.377,1.687,1.687,0,0,1-.159.236h1.913a2.667,2.667,0,0,1-.216-.279.578.578,0,0,1-.093-.261c-.008-.586,0-1.172-.007-1.757a.254.254,0,0,1,.161-.255.367.367,0,0,1,.535.2,1.446,1.446,0,0,1,.079.441c.009.38-.009.761,0,1.141a.79.79,0,0,1-.218.641.634.634,0,0,0-.079.13h1.892a.838.838,0,0,0-.059-.105.793.793,0,0,1-.236-.541c.012-.566-.016-1.132-.026-1.7a.177.177,0,0,1,.035-.112.408.408,0,0,1,.693.127.8.8,0,0,1,.054.264c.005.507.01,1.014,0,1.521a.71.71,0,0,1-.114.291,2.725,2.725,0,0,1-.188.266H32.5a1.515,1.515,0,0,0-.131-.181.646.646,0,0,1-.185-.522c.013-.488.025-.978,0-1.466a1.032,1.032,0,0,0-1.3-1.051,1.243,1.243,0,0,0-.836.65M20.2,15.768c.122.164.226.282.305.414a.661.661,0,0,1,.112.309q.012,1.521,0,3.042a.658.658,0,0,1-.113.309c-.081.135-.186.255-.281.382.888,0,1.752.044,2.61-.013a1.924,1.924,0,0,0,1.711-1.157,2.937,2.937,0,0,0,.217-1.343,1.843,1.843,0,0,0-1.606-1.872,11.2,11.2,0,0,0-1.443-.068c-.487-.01-.975,0-1.513,0m10.462,4.479a1.4,1.4,0,0,0-.118-.16.673.673,0,0,1-.191-.539c.013-.513.012-1.026,0-1.539a.3.3,0,0,1,.24-.347.362.362,0,0,1,.442.191.935.935,0,0,1,.085.347c.01.44-.006.881.008,1.321a.692.692,0,0,1-.188.559.949.949,0,0,0-.106.16h1.9a1.134,1.134,0,0,0-.122-.164.644.644,0,0,1-.182-.56c.016-.368.024-.736.013-1.1a3.084,3.084,0,0,0-.088-.678.9.9,0,0,0-.57-.657,1.155,1.155,0,0,0-1.338.4c-.019.026-.04.05-.094.115v-.517h-1.6a1.272,1.272,0,0,0,.115.165.7.7,0,0,1,.181.545c-.01.579-.011,1.159,0,1.738a.7.7,0,0,1-.189.56.942.942,0,0,0-.1.16ZM21.48,26.516a.419.419,0,0,1,.011.069c0,1.166,0,2.331,0,3.5a.5.5,0,0,1-.1.259c-.11.159-.238.307-.376.48h2.4c-.109-.139-.191-.258-.288-.363a.7.7,0,0,1-.19-.522c.011-1.075,0-2.15,0-3.225v-.194a.257.257,0,0,1,.337.149c.254.472.518.94.779,1.408.027.048.059.094.116.183v-1.9h-3.9v1.888c.061-.1.1-.163.133-.226.251-.453.506-.905.75-1.362a.249.249,0,0,1,.326-.147m5.313-6.2,0-.016c.06,0,.121,0,.181,0a1.553,1.553,0,0,0,1.662-1.525,1.506,1.506,0,0,0-1.231-1.7,3,3,0,0,0-.628-.061,2.659,2.659,0,0,0-.591.065,1.525,1.525,0,0,0-1.2,1.822,1.446,1.446,0,0,0,1.236,1.344c.188.04.382.049.573.073m.181,3.476c-.092-.03-.147-.051-.2-.066a1.415,1.415,0,0,0-1.136.116.975.975,0,0,0-.4,1.172.856.856,0,0,0,.94.575.942.942,0,0,0,.766-.517.872.872,0,0,0,1.125.475.519.519,0,0,0,.412-.56c-.2.095-.27.052-.283-.17,0-.06,0-.121,0-.181.013-.416.044-.833.036-1.248a.976.976,0,0,0-.894-1.032A4.5,4.5,0,0,0,26.3,22.35a7.29,7.29,0,0,0-.907.2l.485,1.008c.048-.07.08-.111.105-.155.158-.271.313-.543.471-.814a.218.218,0,0,1,.389-.016.425.425,0,0,1,.079.2c.023.334.034.669.051,1.026M28.8,13.775a1.088,1.088,0,0,1-1.433.35.773.773,0,0,1-.347-.806h1.855a5.077,5.077,0,0,0-.087-.715,1.106,1.106,0,0,0-.789-.8,2.228,2.228,0,0,0-1.473.048,1.558,1.558,0,0,0-.911,1.8,1.383,1.383,0,0,0,.5.983,1.9,1.9,0,0,0,1.777.307,1.3,1.3,0,0,0,.907-1.166m6.992,15.4a1.281,1.281,0,0,0-1.136-1.563,2.651,2.651,0,0,0-.433-.021,1.512,1.512,0,0,0-1.629,1.349,1.537,1.537,0,0,0,1.189,1.88,2.576,2.576,0,0,0,.93.011,1.27,1.27,0,0,0,1.042-1.139c-.592.459-.943.557-1.347.36a.937.937,0,0,1-.474-.877Zm-1-5.287a1.263,1.263,0,0,0-.853-1.5,2.161,2.161,0,0,0-.5-.087,1.671,1.671,0,0,0-1.14,3.047,1.907,1.907,0,0,0,1.607.134,1.309,1.309,0,0,0,.849-1.094,1.123,1.123,0,0,1-1.376.358.841.841,0,0,1-.427-.861Zm-6.4-1.526c.106.27.218.522.3.782q.371,1.113.723,2.232a.2.2,0,0,0,.24.171,3.836,3.836,0,0,1,.579,0c.169.015.239-.045.289-.207a12.372,12.372,0,0,1,1.143-2.877.4.4,0,0,0,.029-.1H30.533c.129.326.258.629.367.939a.545.545,0,0,1,.01.31c-.091.324-.2.643-.307.963-.013.039-.034.076-.066.145-.16-.533-.3-1.032-.462-1.522a.731.731,0,0,1,.027-.652,1.077,1.077,0,0,0,.068-.187Zm5.183-5.133c0,.082,0,.153,0,.224.005.694,0,1.389.021,2.082a.739.739,0,0,0,.729.756,1.867,1.867,0,0,0,.538-.034.789.789,0,0,0,.63-.687.438.438,0,0,0-.065.025c-.292.173-.489.081-.534-.251a1.207,1.207,0,0,1-.012-.162q0-.915,0-1.83a1.136,1.136,0,0,1,.018-.135h.672c.04-.111.017-.159-.1-.157-.191,0-.383,0-.6,0V15.947c-.287.271-.535.507-.786.739-.208.192-.382.452-.73.382-.019,0-.069.048-.069.074a.108.108,0,0,0,.07.075,1.337,1.337,0,0,0,.214.013M24.388,27.657a1.189,1.189,0,0,0,.11.161.718.718,0,0,1,.188.56c-.012.6-.008,1.2,0,1.793a.577.577,0,0,1-.153.444,1.5,1.5,0,0,0-.143.2h1.9a1.05,1.05,0,0,0-.11-.152.7.7,0,0,1-.2-.574c.009-.748,0-1.5,0-2.245v-.192Zm13.267,2.591a.621.621,0,0,0-.671-.657.637.637,0,0,0-.687.668.63.63,0,0,0,.691.643.606.606,0,0,0,.667-.653M32.47,17.5a1.217,1.217,0,0,0,1.016-1.3.768.768,0,0,0-.131-.31.524.524,0,0,0-.6-.157.468.468,0,0,0-.308.464.433.433,0,0,0,.367.449c.126.036.14.1.119.214a1.052,1.052,0,0,1-.458.637m-7.143,8.781a.565.565,0,0,0-.6.57.553.553,0,0,0,.6.537.546.546,0,0,0,.6-.554.561.561,0,0,0-.611-.553" transform="translate(-0.022 -0.051)" class="fill-base-200"></path><path id="Trazado_8535" data-name="Trazado 8535" d="M608.824,441.4c0-.628,0-1.256,0-1.883,0-.155.053-.2.2-.192a.665.665,0,0,1,.7.519,3.794,3.794,0,0,1,.15.959c0,.638-.032,1.276-.074,1.913a1.187,1.187,0,0,1-.17.471.644.644,0,0,1-.7.3c-.044-.011-.095-.111-.1-.17-.007-.64,0-1.28,0-1.92" transform="translate(-586.777 -423.451)" class="fill-base-200"></path><path id="Trazado_8536" data-name="Trazado 8536" d="M730.161,475.289c-.035.377-.069.754-.108,1.131a.3.3,0,0,1-.053.169c-.071.072-.161.168-.245.169a.308.308,0,0,1-.241-.163,2.485,2.485,0,0,1-.132-.687c-.009-.53.014-1.06.029-1.59a.85.85,0,0,1,.039-.213c.045-.152.091-.313.294-.314s.274.162.3.325c.042.261.063.525.085.789.01.126,0,.253,0,.38l.03,0" transform="translate(-702.967 -456.672)" class="fill-base-200"></path><path id="Trazado_8537" data-name="Trazado 8537" d="M728.792,659.019c0,.356.009.657-.007.957a.236.236,0,0,1-.144.173.328.328,0,0,1-.256-.066.792.792,0,0,1,.081-.974,1.112,1.112,0,0,1,.325-.091" transform="translate(-701.882 -635.185)" class="fill-base-200"></path><path id="Trazado_8538" data-name="Trazado 8538" d="M744.7,329.606c-.334,0-.336,0-.315-.349.01-.174.024-.348.046-.521a.452.452,0,0,1,.07-.22c.059-.074.151-.169.226-.167a.3.3,0,0,1,.213.179,4.842,4.842,0,0,1,.112.617.737.737,0,0,1,0,.108c0,.352,0,.352-.354.352" transform="translate(-717.417 -316.5)" class="fill-base-200"></path><path id="Trazado_8539" data-name="Trazado 8539" d="M935.206,766.888c.049-.37.089-.713.144-1.054a.249.249,0,0,1,.259-.231.238.238,0,0,1,.241.227c.038.32.061.643.078.965,0,.029-.074.086-.117.089-.18.01-.36,0-.605,0" transform="translate(-901.333 -737.906)" class="fill-base-200"></path><path id="Trazado_8540" data-name="Trazado 8540" d="M907.6,620.981c.043-.354.077-.687.127-1.017a.267.267,0,0,1,.259-.257.253.253,0,0,1,.261.25c.049.335.074.674.11,1.023Z" transform="translate(-874.73 -597.298)" class="fill-base-200"></path></g></g></g></svg></a>

  <p class="hidden lg:block text-tw-4 xl:text-base font-medium">Follow us</p></div>`;
});
const GateToChainLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 265 42"><defs><clipPath id="clip-Mesa_de_trabajo_8"><rect width="265" height="42"></rect></clipPath></defs><g id="Mesa_de_trabajo_8" data-name="Mesa de trabajo – 8" clip-path="url(#clip-Mesa_de_trabajo_8)"><g id="Grupo_15220" data-name="Grupo 15220" transform="translate(1 2.042)"><g id="Grupo_15221" data-name="Grupo 15221"><path id="Trazado_8634" data-name="Trazado 8634" d="M1.438,30.253C.051,27.272,0,23.42,0,18.541S.051,9.81,1.438,6.834C3.286,2.826,7.19,0,12.841,0,19.5,0,24.806,4.214,24.806,11.248a1.031,1.031,0,0,1-1.027,1.027H18.54a1.125,1.125,0,0,1-1.129-1.027c0-2.362-1.8-4.006-4.57-4.006-2.465,0-4.007.876-4.783,2.465-.736,1.49-.736,5.548-.736,8.83s0,7.359.736,8.831c.769,1.593,2.311,2.465,4.783,2.465,2.944,0,4.827-1.335,4.827-4.672V24.141a.494.494,0,0,0-.03-.2.486.486,0,0,0-.111-.172.483.483,0,0,0-.374-.141H13.764A1.026,1.026,0,0,1,12.738,22.6V17.721a1.027,1.027,0,0,1,1.026-1.027H23.78a1.027,1.027,0,0,1,1.027,1.027v7.4c0,8.168-5.188,11.969-11.966,11.969-5.651,0-9.555-2.826-11.4-6.833" transform="translate(0 -0.001)" class="fill-info-content"></path><path id="Trazado_8635" data-name="Trazado 8635" d="M59,36.382a3.831,3.831,0,0,1,.21-1.026L68.2,1.973a.971.971,0,0,1,.975-.769h6.881a.976.976,0,0,1,.979.769l8.933,33.383a3.666,3.666,0,0,1,.206,1.026c0,.464-.368.773-1.026.773H79.749a.98.98,0,0,1-.975-.773L77.181,31.1c-.151-.463-.306-.772-.769-.772H68.6c-.46,0-.614.257-.769.772L66.4,36.382a.979.979,0,0,1-.975.773H60.027c-.666,0-1.026-.309-1.026-.773M75.334,22.57,72.92,10.5c-.052-.305-.1-.46-.258-.46h-.206c-.154,0-.206.154-.257.46L69.785,22.57c-.052.368.1.563.412.563h4.724c.309,0,.478-.206.412-.563" transform="translate(-31.247 -0.637)" class="fill-info-content"></path><path id="Trazado_8636" data-name="Trazado 8636" d="M123.522,36.1V8.877a.483.483,0,0,0-.141-.374.488.488,0,0,0-.374-.141h-6.42a1.03,1.03,0,0,1-1.027-1.026V2.184a1.03,1.03,0,0,1,1.027-1.026h21.061a1.029,1.029,0,0,1,1.026,1.026V7.336a1.029,1.029,0,0,1-1.026,1.026h-6.42a.486.486,0,0,0-.515.515V36.1a1.029,1.029,0,0,1-1.026,1.026h-5.151a1.03,1.03,0,0,1-1.012-1.026" transform="translate(-61.201 -0.613)" class="fill-info-content"></path><path id="Trazado_8637" data-name="Trazado 8637" d="M175.249,36.13V2.231a1.029,1.029,0,0,1,1.026-1.026h18.648a1.03,1.03,0,0,1,1.026,1.026V7.383a1.03,1.03,0,0,1-1.026,1.026H182.957a.486.486,0,0,0-.2.031.482.482,0,0,0-.282.282.471.471,0,0,0-.031.2v6.148a.485.485,0,0,0,.515.512h11.553a1.03,1.03,0,0,1,1.026,1.026v5.151a1.034,1.034,0,0,1-1.026,1.03H182.957a.479.479,0,0,0-.2.029.488.488,0,0,0-.172.11.481.481,0,0,0-.111.171.469.469,0,0,0-.031.2v6.148a.471.471,0,0,0,.031.2.484.484,0,0,0,.282.283.479.479,0,0,0,.2.03h12.175a1.031,1.031,0,0,1,1.027,1.027v5.151a1.031,1.031,0,0,1-1.027,1.027H176.275a1.034,1.034,0,0,1-.73-.307,1.047,1.047,0,0,1-.222-.337,1.034,1.034,0,0,1-.075-.4" transform="translate(-92.812 -0.638)" class="fill-info-content"></path><path id="Trazado_8638" data-name="Trazado 8638" d="M231.524,35.492V29.435a1.7,1.7,0,0,1,.464-1.284l12.223-13c1.954-2.057,2.517-3.083,2.517-4.724a3.635,3.635,0,0,0-3.9-3.5,3.77,3.77,0,0,0-4,3.753v.872a1.034,1.034,0,0,1-1.041,1.023h-4.871a1.03,1.03,0,0,1-1.016-1.026v-.824C231.891,4.265,236.248,0,242.819,0s10.839,4.11,10.839,10.479a10.579,10.579,0,0,1-3.186,7.856l-9.655,10.221a.57.57,0,0,0,.368,1.026H252.68a1.03,1.03,0,0,1,1.026,1.026v4.883a1.03,1.03,0,0,1-1.026,1.026H232.546a1.03,1.03,0,0,1-1.023-1.026" transform="translate(-122.613)" fill="#2c6ef6"></path><path id="Trazado_8639" data-name="Trazado 8639" d="M290.684,30.253c-1.335-2.98-1.438-6.833-1.438-11.712s.1-8.731,1.438-11.708c1.8-4.007,5.6-6.833,11.148-6.833,6.833,0,12.227,4.415,12.227,11.774a1.034,1.034,0,0,1-1.03,1.026H307.79a1.127,1.127,0,0,1-1.133-1.026c0-2.671-1.9-4.522-4.828-4.522-2.311,0-3.8.875-4.518,2.465-.669,1.49-.736,5.548-.736,8.831s.051,7.358.736,8.83c.736,1.593,2.208,2.465,4.518,2.465,2.944,0,4.828-1.84,4.828-4.518a1.123,1.123,0,0,1,1.133-1.041h5.236a1.031,1.031,0,0,1,1.031,1.026c0,7.241-5.291,11.774-12.227,11.774-5.545,0-9.345-2.826-11.145-6.833" transform="translate(-153.185 -0.001)" class="fill-info-content"></path><path id="Trazado_8640" data-name="Trazado 8640" d="M353.236,36.13V2.231a1.026,1.026,0,0,1,1.026-1.026h5.151a1.029,1.029,0,0,1,1.026,1.026V15.072a.485.485,0,0,0,.03.2.481.481,0,0,0,.281.281.486.486,0,0,0,.2.03h7.7a.487.487,0,0,0,.516-.512V2.231A1.026,1.026,0,0,1,370.2,1.205h5.151a1.026,1.026,0,0,1,1.027,1.026v33.9a1.03,1.03,0,0,1-1.027,1.026H370.2a1.029,1.029,0,0,1-1.026-1.026V23.289a.483.483,0,0,0-.516-.512h-7.719a.485.485,0,0,0-.2.03.493.493,0,0,0-.171.11.486.486,0,0,0-.11.171.479.479,0,0,0-.03.2V36.13c0,.563-.736,1.026-1.284,1.026h-4.879a1.03,1.03,0,0,1-1.026-1.026" transform="translate(-187.074 -0.638)" class="fill-info-content"></path><path id="Trazado_8641" data-name="Trazado 8641" d="M411.1,36.382a3.847,3.847,0,0,1,.206-1.026L420.3,1.973a.971.971,0,0,1,.975-.769h6.884a.975.975,0,0,1,.975.769l8.938,33.383a3.843,3.843,0,0,1,.206,1.026c0,.464-.368.773-1.03.773h-5.383a.978.978,0,0,1-.978-.773l-1.6-5.287c-.155-.463-.309-.772-.773-.772h-7.8c-.463,0-.618.257-.772.772L418.5,36.382a.975.975,0,0,1-.975.773h-5.394c-.666,0-1.027-.309-1.027-.773M427.446,22.57,425.021,10.5c-.051-.305-.1-.46-.257-.46h-.2c-.155,0-.206.154-.258.46L421.89,22.57c-.052.368.1.563.408.563h4.724c.309,0,.464-.206.423-.563" transform="translate(-217.72 -0.637)" class="fill-info-content"></path><path id="Trazado_8642" data-name="Trazado 8642" d="M477.6,36.13V2.231a1.026,1.026,0,0,1,1.026-1.026h5.151a1.029,1.029,0,0,1,1.026,1.026v33.9a1.029,1.029,0,0,1-1.026,1.026H478.63A1.03,1.03,0,0,1,477.6,36.13" transform="translate(-252.94 -0.638)" class="fill-info-content"></path><path id="Trazado_8643" data-name="Trazado 8643" d="M508.172,36.127V2.229A1.03,1.03,0,0,1,509.2,1.2h6.108a1.254,1.254,0,0,1,1.284.923l7.039,21.057c.1.309.463.206.463-.1V2.229A1.026,1.026,0,0,1,525.123,1.2h5.151A1.03,1.03,0,0,1,531.3,2.229v33.9a1.03,1.03,0,0,1-1.026,1.026H524.2a1.328,1.328,0,0,1-1.383-.872l-6.991-19.571c-.1-.309-.46-.206-.46.1V36.127a1.034,1.034,0,0,1-1.03,1.026H509.2a1.034,1.034,0,0,1-1.03-1.026" transform="translate(-269.129 -0.636)" class="fill-info-content"></path></g></g></g></svg>`;
});
const FooterBottom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  let $page, $$unsubscribe_page;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { locales } = $$props;
  const socialMediaLinks = data[0]?.social_media_link;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.locales === void 0 && $$bindings.locales && locales !== void 0)
    $$bindings.locales(locales);
  $page.params.page;
  $page.params.slug;
  $page.url.pathname;
  $$unsubscribe_localeCode();
  $$unsubscribe_page();
  return `<section class="py-5 text-base-200"><div class="flex items-center justify-between space-x-5 md:space-x-10">${validate_component(SocialMediaIcons, "SocialMediaIcons").$$render($$result, { socialMediaLinks }, {}, {})}
    <div class="hidden col-span-3 lg:flex flex-col text-sm font-medium"><a${add_attribute(
    "href",
    data[1].link ? `${data[1].link}` : "https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad",
    0
  )}>${escape(data[1]?.text)}</a>
      <a${add_attribute(
    "href",
    data[2].link ? `${data[2].link}` : "https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad",
    0
  )}>${escape(data[2]?.text)}</a></div>

    <div class="hidden lg:block"><a class="text-lg font-bold"${add_attribute("href", `/faq?lang=${$localeCode}`, 0)}>FAQ&#39;S</a></div>
    <div class="hidden lg:block"><a${add_attribute("href", `/?lang=${$localeCode}`, 0)}>${validate_component(BlockchainLogo, "BlockchainLogo").$$render($$result, {}, {}, {})}</a></div>
    <div class="hidden col-span-2 lg:flex flex-col items-center gap-y-2"><p class="text-tw-gray text-sm font-medium">${escape(data[3].text ? data[3].text : "Trusted Partner's")}</p>
      
      <a target="_blank" href="https://www.gate2chain.com/">${validate_component(GateToChainLogo, "GateToChainLogo").$$render($$result, {}, {}, {})}</a></div>

    <p class="hidden lg:block text-accent-focus text-sm font-bold w-36">Technology created to fight climate crisis
    </p>
    <select class="bg-transparent outline-none text-xs lg:text-base">${each(locales, (locale) => {
    return `<option${add_attribute("value", locale.code, 0)}>${escape(locale.name)}</option>`;
  })}</select></div>

  <div class="lg:hidden mt-5"><div class="text-[10px] text-primary-content font-medium flex flex-col md:flex-row items-center md:justify-between space-y-1 md:space-y-0"><p>Copyright © 2023 TRUEWORLD SL. All rights reserved.</p>
      <div class="flex items-center justify-center space-x-1"><a${add_attribute(
    "href",
    data[1].link ? `${data[1].link}?lang=${$localeCode}` : "https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad",
    0
  )}>Privacy Policy
        </a>
        <span>|</span>
        <a${add_attribute(
    "href",
    data[1].link ? `${data[1].link}?lang=${$localeCode}` : "https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad",
    0
  )}>Terms of use
        </a>

        <span>|</span>
        <a${add_attribute("href", `/?lang=${$localeCode}`, 0)}>Legal</a>
        <span>|</span>
        <a${add_attribute("href", `/?lang=${$localeCode}`, 0)}>Sitemap</a></div></div></div></section>`;
});
const FooterLinksMob_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-h6m6zl-details-show{from{opacity:0;transform:var(--details-translate, translateY(-0.5em))}}details[open].svelte-h6m6zl>.svelte-h6m6zl:not(summary){animation:svelte-h6m6zl-details-show 200ms ease-in-out}details.svelte-h6m6zl summary.svelte-h6m6zl{list-style:none}details.svelte-h6m6zl summary .closed.svelte-h6m6zl{display:none}details[open].svelte-h6m6zl summary .closed.svelte-h6m6zl{display:block}details[open].svelte-h6m6zl summary .open.svelte-h6m6zl{display:none}details.svelte-h6m6zl summary.svelte-h6m6zl::-webkit-details-marker{display:none}",
  map: null
};
const FooterLinksMob = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { footerLinks } = $$props;
  if ($$props.footerLinks === void 0 && $$bindings.footerLinks && footerLinks !== void 0)
    $$bindings.footerLinks(footerLinks);
  $$result.css.add(css);
  $$unsubscribe_localeCode();
  return `<div class="lg:hidden">${each(footerLinks, (footerLink) => {
    return `<details class="cursor-pointer svelte-h6m6zl"><summary class="flex items-center justify-between py-3 border-b-2 border-accent-content/20 svelte-h6m6zl"><span class="text-primary-content font-medium">${escape(footerLink.title ?? "")}</span>
        <svg class="open w-4 h-4 text-base-200 rotate-90 svelte-h6m6zl" fill="none" stroke="currentColor" stroke-width="3.00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
        <svg class="closed w-4 h-4 text-base-200 svelte-h6m6zl" fill="none" stroke="currentColor" stroke-width="3.00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path></svg></summary>
      <div class="pl-4 mt-3 space-y-4 svelte-h6m6zl">${each(footerLink.links, (link) => {
      return `<li class="cursor-pointer list-none"><a class="font-light"${add_attribute("href", `${link.link}?lang=${$localeCode}`, 0)}>${escape(link.text ?? "")}</a>
          </li>`;
    })}</div>
    </details>`;
  })}
  <div class="py-3 border-b border-accent-content/20"><a class="text-primary-content font-medium"${add_attribute("href", `/faq?lang=${$localeCode}`, 0)}>FAQ&#39;S</a></div>
</div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $footerStore, $$unsubscribe_footerStore;
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_footerStore = subscribe(footerStore, (value) => $footerStore = value);
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { locales } = $$props;
  let footerData = $footerStore.data?.attributes;
  footerData?.footer_left_section[0]?.logo?.data?.attributes.url;
  if ($$props.locales === void 0 && $$bindings.locales && locales !== void 0)
    $$bindings.locales(locales);
  $$unsubscribe_footerStore();
  $$unsubscribe_localeCode();
  return `
<div class="relative z-0 bg-info"><div class="px-[5%] xl:px-0 max-w-7xl mx-auto text-base-200">${validate_component(FooterLinksMob, "FooterLinksMob").$$render(
    $$result,
    {
      footerLinks: $footerStore.data?.attributes?.footer_links_section
    },
    {},
    {}
  )}
    <section class="hidden py-10 lg:flex gap-x-10 gap-y-7"><div class="space-y-5">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}

        ${$footerStore.data?.attributes?.footer_left_section[0]?.locations.length > 0 ? `${each($footerStore.data?.attributes?.footer_left_section[0]?.locations, (location) => {
    return `<div class="last:pt-2"><div class="flex gap-x-2"><p class="font-medium text-primary-content">${escape(location.title ?? "")}</p>
                <hr class="flex-1 border-accent-content/20 mt-4"></div>
              <p class="text-xs">${escape(location.address ?? "")}</p>
            </div>`;
  })}` : ``}</div>

      <div class="flex w-full xl:justify-end "><div class="flex flex-col lg:flex-row gap-x-10 gap-y-7">${$footerStore.data?.attributes?.footer_links_section?.length > 0 ? `${each($footerStore.data?.attributes?.footer_links_section, (footerLink) => {
    $footerStore.data?.attributes?.footer_links_section.length;
    return `
              <div class="mt-1">
                <p class="font-medium capitalize text-primary-content">${escape(footerLink.title ?? "")}</p>
                <ul class="mt-3 space-y-3">${each(footerLink.links, (link) => {
      return `<li class="cursor-pointer hover:text-tw-orange hover:underline"><a class="font-light"${add_attribute("href", `${link.link}?lang=${$localeCode}`, 0)}>${escape(link.text ?? "")}</a>
                    </li>`;
    })}</ul>
              </div>`;
  })}` : ``}</div></div></section>
    <div class="bg-tw-blue/20 h-[1px]"></div>

    ${validate_component(FooterBottom, "FooterBottom").$$render(
    $$result,
    {
      data: $footerStore.data?.attributes?.footer_bottom_section,
      locales
    },
    {},
    {}
  )}</div>
  <div class="lg:hidden w-full bg-secondary pt-3 pb-5 flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { locales } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main>${validate_component(Nav, "Nav").$$render($$result, { showNavLinks: true }, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Footer, "Footer").$$render($$result, { locales }, {}, {})}</main>`;
});
export {
  Layout as default
};

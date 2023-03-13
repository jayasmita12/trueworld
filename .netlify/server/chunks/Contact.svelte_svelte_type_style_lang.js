import "debug";
const defer = () => {
  var res, rej;
  var promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
defer();
const Contact_svelte_svelte_type_style_lang = "";

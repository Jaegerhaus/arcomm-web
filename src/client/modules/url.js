
const toQueryParam = object =>
  encodeURIComponent(JSON.stringify(object));

const toQueryString = object => {
  var parts = [];

  for (var i in object)
    if (object.hasOwnProperty(i))
      parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(object[i]));

  return parts.join("&");
};

const getQueryParam = (href, name) =>
  getQueryParams(href)[name];

const getQueryParams = query => {
  if (!query) return {};

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split("&")
    .reduce((params, param) => {
      let [key, value] = param.split("=");
      if (!key) return params;
      params[key] = value
        ? decodeURIComponent(value.replace(/\+/g, " "))
        : "";
      return params;
    }, {});
};

export {
  toQueryParam,
  toQueryString,
  getQueryParam,
  getQueryParams,
};

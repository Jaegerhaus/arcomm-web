
const jsonHandler = response =>
  response.ok
    ? response.json()
    : Promise.reject(response.body || "Unknown error");

export {
  jsonHandler,
};

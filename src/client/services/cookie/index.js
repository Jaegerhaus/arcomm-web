import cookie from "cookie";

class CookieService {

  constructor(config, document) {
    this.document = document;
    this.domain = config.cookie.domain;
  }

  getCookie(name) {
    return cookie.parse(this.document.cookie)[name];
  }

  setCookie(name, value) {
    this.document.cookie = cookie.serialize(
      name,
      value,
      {
        path: "/",
        domain: this.domain,
      },
    );
  }
}

export default CookieService;

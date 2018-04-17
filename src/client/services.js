import Bottle from "bottlejs";

import "whatwg-fetch";

import config from "./config";
import CookieService from "services/cookie";

const kernel = new Bottle();

kernel.service("config", () => config);
kernel.service("location", () => window.location);
kernel.service("history", () => window.history);
kernel.service("fetch", () => fetch.bind(window));
kernel.service("document", () => document);

kernel.service("cookieService", CookieService, "config", "document");

export default kernel.container;

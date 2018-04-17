
import { router as page } from "./page";
import { router as assets } from "./assets";
import { router as api } from "./api";

const routes = {
  "/assets": assets,
  "/api": api,
  "/": page,
};

export default routes;

import express from "express";
import bodyParser from "body-parser";

import routes from "./routes";

const server = express();

server.use(bodyParser.json());

Object.keys(routes).forEach(route => {
  server.use(route, routes[route]);
});

console.log("Starting server on 5000");
server.listen("5000");

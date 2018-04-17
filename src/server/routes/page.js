import fs from "fs";
import path from "path";
import express from "express";
import handlebars from "handlebars";

const router = express.Router();

router.get("*", (request, response) => {

  const template = handlebars.compile(
    fs.readFileSync(
      path.join(__dirname, "index.html"),
      "utf8"
    )
  );

  const content = ""; // ReactDOMServer.renderToString(app)

  response.send(template({ content }));
});

export { router };

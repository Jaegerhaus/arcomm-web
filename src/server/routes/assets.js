import path from "path";
import express from "express";

const router = express.Router();

router.get("/:name", (request, response) => {
  response.sendFile(
    path.join("assets", request.params.name),
    { root: __dirname }
  );
});

export { router };

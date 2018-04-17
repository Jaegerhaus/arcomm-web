import express from "express";

import ConfigService from "../services/config";

const configService = new ConfigService();

const router = express.Router();

const errorHandler = (response, error) => {
  console.log(error);
  response
    .status(500)
    .send({ error });
};

router.get("/test", (request, response) => {
  response
    .status(200)
    .send("It works!");
});

export { router };

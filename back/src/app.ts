import express, { NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Request, Response } from "express";
import { videoRouter } from "./app/videos/video-routes";
import { CustomError } from "./lib/custom-error";
import { ResponseApi } from "./lib/response-api";

dotenv.config();

const PORT = 3000;
const app = express();

app.use(cors());
app.use("/static", express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "API working" });
});
const API_VERSION = "/api/v1";
app.use(API_VERSION, videoRouter);
app.use((error: any, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof CustomError)
    return response
      .status(error.status)
      .send(ResponseApi.error({ message: error.message }));

  response.status(400).send(ResponseApi.error({ message: "Error" }));
});

app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});

import { NextFunction, Request, Response } from "express";
import { VideoService } from "./video-service";
import { ResponseApi } from "../../lib/response-api";
import { CustomError } from "../../lib/custom-error";
import fs from "fs";
import path from "path";

const PUBLIC_PATH = path.join(__dirname, "..", "..", "..", "public");

export class VideoController {
  constructor(private service: VideoService) {}

  find = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const data = this.service.find();
      return response.send(ResponseApi.success({ data }));
    } catch (error) {
      next(error);
    }
  };

  findByUrl = async (
    request: Request<{ url: string }>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { url } = request.params;
      const data = this.service.findByUrl(url);
      if (!data) throw new CustomError(404, "Video doesn't exist");
      return response.send(ResponseApi.success({ data }));
    } catch (error) {
      next(error);
    }
  };

  stream = async (
    request: Request<{ url: string }>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { url } = request.params;
      const videoPath = path.join(PUBLIC_PATH, "uploads", "videos", url);
      const data = this.service.findByUrl(url);
      if (!data) throw new CustomError(404, "Video doesn't exist");

      const stat = fs.statSync(videoPath);
      const fileSize = stat.size;
      const range = request.headers.range;

      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkSize = end - start + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const headers = {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunkSize,
          "Content-Type": "video/mp4",
        };

        response.writeHead(206, headers);
        file.pipe(response);
      } else {
        const headers = {
          "Content-Length": fileSize,
          "Content-Type": "video/mp4",
        };

        response.writeHead(200, headers);
        fs.createReadStream(videoPath).pipe(response);
      }
    } catch (error) {
      next(error);
    }
  };
}

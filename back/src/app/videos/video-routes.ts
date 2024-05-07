import { Router } from "express";
import { VideoService } from "./video-service";
import { VideoController } from "./video-controller";

const VIDEO_ROUTE = "/video";
const router = Router();
const service = new VideoService();
const controller = new VideoController(service);

router.get(`${VIDEO_ROUTE}`, controller.find);
router.get(`${VIDEO_ROUTE}/:url`, controller.findByUrl);
router.get(`/stream/:url`, controller.stream);

export const videoRouter = router;

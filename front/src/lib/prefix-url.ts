import { SERVER_URL } from "./constants";

const prefix = SERVER_URL;
export function prefixThumbnail(name: string) {
  return prefix + "/static/uploads/images/" + name;
}

export function prefixVideo(name: string) {
  return prefix + "/static/uploads/videos/" + name;
}

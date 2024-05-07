import { Video } from "../../data-type";
import { API_VERSION, SERVER_URL } from "../../lib/constants";

export class VideoService {
  static async find(): Promise<Video[]> {
    return fetch(SERVER_URL + API_VERSION + "/video")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  static async findByUrl(url: string): Promise<Video> {
    return fetch(SERVER_URL + API_VERSION + "/video/" + url)
      .then((res) => res.json())
      .then((d) => d.data);
  }

  static stream(url: string) {
    return SERVER_URL + API_VERSION + "/stream/" + url;
  }
}

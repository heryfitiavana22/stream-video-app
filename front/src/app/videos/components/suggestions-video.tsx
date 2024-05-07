import { useEffect, useState } from "react";
import { Video } from "../../../data-type";
import { VideoService } from "../video-service";
import { CardVideo } from "./card-video";

export function SuggestionsVideo({}: SuggestionsVideoProps) {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    VideoService.find()
      .then((data) => {
        setVideos(data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="grid grid-cols-1 gap-6">
      {videos.map((video) => (
        <CardVideo video={video} key={video.id} />
      ))}
    </div>
  );
}

type SuggestionsVideoProps = {};

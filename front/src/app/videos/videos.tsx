import { useEffect, useState } from "react";
import { Video } from "../../data-type";
import { VideoService } from "./video-service";
import { CardVideo } from "./components/card-video";

export function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    VideoService.find()
      .then((data) => {
        setVideos(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <CardVideo video={video} key={video.id} />
        ))}
      </div>
    </main>
  );
}

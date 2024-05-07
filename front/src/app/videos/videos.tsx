import { useEffect, useState } from "react";
import { Video } from "../../data-type";
import { VideoService } from "./video-service";
import { CardVideo } from "./components/card-video";
import { Loading } from "../../components/loading/loading";

export function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    VideoService.find()
      .then((data) => {
        setVideos(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

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

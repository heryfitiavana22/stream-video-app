import { useEffect, useState } from "react";
import { Video } from "../../data-type";
import { VideoService } from "./video-service";
import { useParams } from "react-router-dom";
import { PlayVideo } from "./components/play-video";
import { SuggestionsVideo } from "./components/suggestions-video";

export function DetailVideo() {
  const { url } = useParams();
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scroll(0, 0)
    VideoService.findByUrl(url as string)
      .then((data) => setCurrentVideo(data))
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <div>loading ... </div>;
  if (!currentVideo) throw new Error("Video doesn't exist");

  return (
    <>
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <PlayVideo video={currentVideo} />
        <SuggestionsVideo />
      </main>
    </>
  );
}

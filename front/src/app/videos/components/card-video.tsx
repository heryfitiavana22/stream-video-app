import { Link } from "react-router-dom";
import { Video } from "../../../data-type";
import { prefixThumbnail } from "../../../lib/prefix-url";
import Play from "../../../components/icons/play";

export function CardVideo({ video }: CardVideoProps) {
  return (
    <Link
      to={"/video/" + video.url}
      className="rounded-lg group overflow-hidden shadow-lg"
      title={video.title}
    >
      <div className="relative">
        <img
          alt="Video Thumbnail"
          className="w-full h-48 object-cover"
          height={225}
          src={prefixThumbnail(video.thumbnail)}
          style={{
            aspectRatio: "400/225",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="absolute top-0 left-0 flex justify-center items-center size-0 group-hover:size-full bg-black/25">
          <Play className="text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 overflow-ellipsis">{video.title}</h3>
        <p className="text-gray-600 line-clamp-2">{video.description}</p>
      </div>
    </Link>
  );
}

type CardVideoProps = {
  video: Video;
};

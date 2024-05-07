import { Video } from "../../../data-type";
import { useEffect, useRef, useState } from "react";
import { VideoService } from "../video-service";
import { DateHumanizer } from "../../../lib/date-humanizer";
import Play from "../../../components/icons/play";
import Volume from "../../../components/icons/volume";
import Pause from "../../../components/icons/pause";
import VolumeMuted from "../../../components/icons/volume-muted";

export function PlayVideo({ video }: PlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const onDurationChange = () => {
      setDuration(video.duration);
    };

    const onProgress = () => {
      if (video.buffered.length > 0) {
        setBuffered(video.buffered.end(0));
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("durationchange", onDurationChange);
    video.addEventListener("progress", onProgress);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("durationchange", onDurationChange);
      video.removeEventListener("progress", onProgress);
    };
  }, []);

  const handleSeek = (event: any) => {
    const video = videoRef.current;
    if (!video) return;
    const seekTo =
      (event.nativeEvent.offsetX / event.target.clientWidth) * video.duration;
    video.currentTime = seekTo;
  };

  const calculatePercentage = (value: number, total: number) => {
    return (value / total) * 100 + "%";
  };

  const playOrPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  const volume = () => {
    if (!videoRef.current) return;
    setMuted(!videoRef.current.muted);
  };

  return (
    <div className="">
      <div className="relative overflow-hidden flex flex-col group">
        <video
          ref={videoRef}
          className="object-cover rounded-lg aspect-video"
          muted={muted}
          onClick={playOrPause}
          src={VideoService.stream(video.url)}
        >
          {/* <source  type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
        <div className="controls py-2 -bottom-full group-hover:bottom-0 absolute  w-full px-2 transition-all bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.3)] rounded-lg to-[rgba(0,0,0,0)]">
          <div
            className="relative w-full h-2 bg-gray-600 cursor-pointer rounded-sm"
            onClick={handleSeek}
          >
            <div
              className="absolute left-0 top-0 h-full bg-gray-200 rounded-sm"
              style={{ width: calculatePercentage(buffered, duration) }}
            />
            <div
              className="absolute left-0 top-0 h-full bg-red-500 rounded-sm"
              style={{ width: calculatePercentage(currentTime, duration) }}
            />
          </div>
          <div className="flex items-center justify-between px-2 space-x-2 text-white mt-2">
            <div className="flex items-center space-x-2">
              <button className="hover:text-gray-400" onClick={playOrPause}>
                {videoRef.current?.paused ? <Play /> : <Pause />}
              </button>
              <div className="video-duration">
                <span>{DateHumanizer.duration(currentTime)}</span> /{" "}
                <span>{DateHumanizer.duration(duration)}</span>
              </div>
            </div>
            <div>
              <button className="hover:text-gray-400" onClick={volume}>
                {muted ? <VolumeMuted /> : <Volume />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{video.title}</h3>
        <p className="text-gray-600">
          {video.description}
        </p>
      </div>
    </div>
  );
}

type PlayVideoProps = {
  video: Video;
};

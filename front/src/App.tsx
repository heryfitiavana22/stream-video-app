import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);

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

  return (
    <>
      <div>
      {/* "http://localhost:3000/video" */}
        <video ref={videoRef} controls width="600" height="400">
          <source src={"http://localhost:3000/video"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="progress-bar" onClick={handleSeek}>
          <div
            className="buffered"
            style={{ width: calculatePercentage(buffered, duration) }}
          />
          <div
            className="played"
            style={{ width: calculatePercentage(currentTime, duration) }}
          />
        </div>
      </div>
    </>
  );
}

export default App;

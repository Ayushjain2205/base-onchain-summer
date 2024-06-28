import React, { useRef, useState } from "react";
import Page from "../components/Layout/Page";

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const Feed = ({ videoSrc = "/videos/taylor.mp4" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const startPlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((error) => {
          console.error("Playback failed:", error);
        });
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
          });
      }
    }
  };

  return (
    <Page>
      <div className="relative h-screen w-full bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={videoSrc}
          loop
          playsInline
          onClick={hasInteracted ? togglePlay : startPlay}
        />
        {!hasInteracted && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-black bg-opacity-50 rounded-full p-4 transition-transform transform hover:scale-110"
              onClick={startPlay}
            >
              <PlayIcon />
            </button>
          </div>
        )}

        <>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg font-bold">Video Title</p>
            <p className="text-sm">Video description or user info</p>
          </div>
          <button
            className="absolute bottom-4 right-4 text-white bg-transparent border border-white rounded-full p-2"
            onClick={togglePlay}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </>
      </div>
    </Page>
  );
};

export default Feed;

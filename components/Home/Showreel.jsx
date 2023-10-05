"use client"

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const Showreel = (props) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setPlaying(true);
      });
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    const handleVideoEnded = () => {
      setPlaying(false);
    };
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  return (
    <section className={`${props.style} relative h-full mt-[-1px]`}>
      <div className="relative">
        {(!playing || (videoRef.current && videoRef.current.ended)) && (
          <Image
            src={props.poster}
            alt="End Image"
            layout="fill"
            objectFit="cover"
          />
        )}
        <video
          ref={videoRef}
          preload="metadata"
          autoPlay={false}
          playsInline
          onClick={handlePlayPause}
          poster={props.poster}
        >
          <source src={props.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!playing && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/assets/images/Play.svg"
              alt="Play"
              width={96}
              height={96}
            />
          </button>
        )}
      </div>
    </section>
  );
};

export default Showreel;

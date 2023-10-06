"use client"

import { useEffect, useRef, useState } from "react";

const Video = (props) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setPlaying(true));
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      const mobileDevicePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

      setIsMobile(mobileDevicePattern.test(userAgent));

      if (!isMobile) {
        videoRef.current.autoplay = true;
        videoRef.current.muted = true;
      }
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      observer.unobserve(videoElement);
      observer.disconnect();
    };
  }, [isMobile]);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (!isMobile && entry.isIntersecting) {
        if (!playing) {
          handlePlayPause();
        }
      } else if (isMobile && playing) {
        handlePlayPause();
      }
    });
  };

  return (
    <section className={`${props.style} relative`}>
      <video
        ref={videoRef}
        preload="metadata"
        autoPlay={false}
        poster={props.poster}
        loop
        playsInline 
        onClick={handlePlayPause}
      >
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isMobile && !playing && (
        <button className="absolute w-full h-full top-0 left-0" onClick={handlePlayPause}></button>
      )}
    </section>
  );
};

export default Video;


"use client";

import React, { useRef, useEffect } from "react";

const Video = (props, { videoSource }) => {
    const videoRef = useRef(null);

    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        });
    };

    useEffect(() => {
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
    }, []);

    return (
        <section className={`${props.style}`}>
            <video
                ref={videoRef}
                preload="metadata"
                autoPlay={false}
                loop
                muted
            >
                <source src={props.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default Video;

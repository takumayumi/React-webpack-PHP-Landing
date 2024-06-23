import React, { useEffect, useRef, useState } from "react";

const YTVideo = ({ title, ytID }) => {
  const videoConRef = useRef(null);
  const videoRef = useRef(null);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const videoCon = videoConRef.current;

    if (videoCon) {
      const video = videoRef.current;

      if (video) {
        const options = {
          root: videoCon,
          rootMargin: "100px",
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && supported) {
              loadYouTubeVideo(video);
              observer.unobserve(entry.target);
            }
          });
        }, options);

        observer.observe(video);

        return () => {
          observer.unobserve(video);
        };
      }
    }
  }, [supported, videoConRef, videoRef]);

  const loadYouTubeVideo = (video) => {
    if (video) {
      const iframe = document.createElement("iframe");

      iframe.setAttribute(
        "src",
        `https://www.youtube.com/embed/${ytID}?autoplay=0&rel=0`,
      );
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      );
      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("title", title);
      iframe.setAttribute("height", "360");
      iframe.setAttribute("width", "640");

      iframe.style.display = "block";
      iframe.style.maxHeight = "auto";
      iframe.style.maxWidth = "100%";
      iframe.style.margin = "0 auto";

      videoRef.current.appendChild(iframe);
    }
  };

  useEffect(() => {
    const isBFCacheSupported = "onpageshow" in window;
    const isIntersectionObserverSupported = "IntersectionObserver" in window;
    const isJSEnabled = true;

    setSupported(
      isBFCacheSupported && isIntersectionObserverSupported && isJSEnabled,
    );
  }, []);

  return (
    <div className="bg-red relative block w-full">
      <div className="wrapper-y-sm" ref={videoConRef}>
        {supported ? (
          <div ref={videoRef} />
        ) : (
          <p>
            If you can't see the video, you can watch it{" "}
            <a
              className="hover:underline"
              href={`https://www.youtube.com/watch?v=${ytID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default YTVideo;

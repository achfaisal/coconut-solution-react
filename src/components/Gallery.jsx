import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Gallery = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 960;
  const videoHeight = isMobile ? 1080 : 600;

  return (
    <>
      <div className="landing-video">
        <iframe
          src="https://www.youtube.com/embed/gu23nQSULiE?autoplay=1&mute=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1"
          width="1920"
          height={videoHeight}
          allowFullScreen
          data-uk-responsive
          data-uk-video="autoplay: inview"
        ></iframe>
      </div>
    </>
  );
};

export default Gallery;

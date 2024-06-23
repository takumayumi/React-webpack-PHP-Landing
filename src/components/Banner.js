import React, { useEffect, useRef, useState, lazy } from "react";
import classNames from "classnames";
import bgPNG from "../assets/images/bg.jpg";
import bgWebP from "../assets/images/bg.jpg?as=webp";

const Button = lazy(() => import("./Button"));
const Image = lazy(() => import("./Image"));

const BackToTop = ({ onClick, showButton }) => {
  return (
    <a
      href="#main-container"
      className={classNames(
        " bg-dark-blue fill-light-yellow fixed bottom-7 right-10 z-10 flex h-9 w-9 items-center justify-center rounded-full p-3 transition-all duration-300 ease-in hover:bg-blue",
        showButton
          ? "translate-y-0 opacity-100"
          : "translate-y-[200%] opacity-0",
      )}
      title="Go to top"
      aria-label="Go to top"
      type="button"
      onClick={onClick}
    >
      <svg width="15" height="15" viewBox="0 0 20 20">
        <path d="M10,0L9.4,0.6L0.8,9.1l1.2,1.2l7.1-7.1V20h1.7V3.3l7.1,7.1l1.2-1.2l-8.5-8.5L10,0z"></path>
      </svg>
    </a>
  );
};

const Banner = () => {
  const bannerRef = useRef(null);
  const [supported, setSupported] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const banner = bannerRef.current;

    if (banner && supported) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          setShowButton(!entry.isIntersecting);
        });
      }, options);

      observer.observe(banner);

      return () => {
        observer.unobserve(banner);
      };
    }
  }, [supported, bannerRef]);

  useEffect(() => {
    const isIntersectionObserverSupported = "IntersectionObserver" in window;

    setSupported(isIntersectionObserverSupported);
  }, []);

  return (
    <>
      <div
        className="relative block w-full bg-black text-white"
        ref={bannerRef}
      >
        <Image
          srcSet={bgWebP}
          src={bgPNG}
          alt="Background"
          width="1000"
          height="637"
          className="absolute left-0 top-0 h-full w-full opacity-20 [&_img]:h-full [&_img]:w-full"
        />
        <span className="bg-dark-red/10 absolute h-full w-full" />
        <div className="wrapper-y-lg relative z-20 flex w-full flex-col items-center text-center lg:items-start lg:text-left [&_>_*:not(:first-child):not(:last-child)]:mb-6">
          <h5 className="text-xl font-bold">
            Cras accumsan efficitur dignissim
          </h5>
          <h2 className="text-[40px] font-bold leading-[1] lg:text-[62px] lg:leading-[1.2em]">
            Lorem Ipsum
          </h2>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
          <p>
            Fusce ex libero, cursus at mauris id, accumsan ullamcorper nulla.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Suspendisse vestibulum ipsum leo, ac fermentum ante rhoncus eget.
          </p>
          <Button />
        </div>
      </div>
      <BackToTop showButton={showButton} />
    </>
  );
};

export default Banner;

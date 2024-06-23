import React, { Suspense, lazy } from "react";

const Banner = lazy(() => import("./components/Banner"));
const Carousel = lazy(() => import("./components/Carousel"));
const Company = lazy(() => import("./components/Company"));
const Features = lazy(() => import("./components/Features"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const YTVideo = lazy(() => import("./components/YTVideo"));

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <svg
        id="svg-spinner"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="animate-spin"
      >
        <circle cx="24" cy="4" r="4" fill="#fff" />
        <circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2" />
        <circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4" />
        <circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7" />
        <circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9" />
        <circle cx="24" cy="44" r="2.5" fill="#feebbc" />
        <circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af" />
        <circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1" />
        <circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94" />
        <circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86" />
      </svg>
    </div>
  );
};

const App = () => {
  return (
    <div
      className="bg-light-yellow text-dark-red relative block min-h-full w-full text-base not-italic"
      id="main-container"
    >
      <Suspense fallback={<Loading />}>
        <Header />
        <Banner />
        <Company />
        <Features />
        <Carousel />
        <YTVideo title="Phasellus in Mattis Massa" ytID="dQw4w9WgXcQ" />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;

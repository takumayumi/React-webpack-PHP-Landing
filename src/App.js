/**
 * App.js
 * Main application component.
 * Renders the layout with lazy-loaded sections and fallback loading animation.
 *
 * Author: Yumi Takuma
 */

import React, { Suspense, lazy } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";

const Carousel = lazy(() => import("./components/Carousel"));
const Company = lazy(() => import("./components/Company"));
const Features = lazy(() => import("./components/Features"));
const Footer = lazy(() => import("./components/Footer"));
const YTVideo = lazy(() => import("./components/YTVideo"));

// Loading fallback component shown while lazy-loaded components are loading
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
        <circle cx="24" cy="4" r="4" fill="#731E16" />
        <circle cx="12.19" cy="7.86" r="3.7" fill="#731E16" />
        <circle cx="5.02" cy="17.68" r="3.4" fill="#731E16" />
        <circle cx="5.02" cy="30.32" r="3.1" fill="#731E16" />
        <circle cx="12.19" cy="40.14" r="2.8" fill="#731E16" />
        <circle cx="24" cy="44" r="2.5" fill="#731E16" />
        <circle cx="35.81" cy="40.14" r="2.2" fill="#731E16" />
        <circle cx="42.98" cy="30.32" r="1.9" fill="#731E16" />
        <circle cx="42.98" cy="17.68" r="1.6" fill="#731E16" />
        <circle cx="35.81" cy="7.86" r="1.3" fill="#731E16" />
      </svg>
    </div>
  );
};

const App = () => {
  return (
    <div
      className="relative block min-h-full w-full bg-light-yellow text-base not-italic text-dark-red"
      id="main-container"
    >
      <Header />
      <Banner />
      <Suspense fallback={<Loading />}>
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

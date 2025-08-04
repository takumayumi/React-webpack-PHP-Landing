/**
 * Header.js
 * Displays the site header with a logo using a lazily loaded Image component.
 *
 * Author: Yumi Takuma
 */

import React, { lazy } from "react";
import logoPNG from "../assets/images/logo.png";
import logoWebP from "../assets/images/logo.png?as=webp";

const Image = lazy(() => import("./Image"));

const Header = () => {
  return (
    <header className="relative block w-full">
      <div className="wrapper flex flex-row items-center justify-start">
        <Image
          srcSet={logoWebP}
          src={logoPNG}
          alt="Logo"
          width="122"
          height="64"
          className="[&_img]:h-16 [&_img]:w-auto"
        />
      </div>
    </header>
  );
};

export default Header;

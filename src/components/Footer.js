import React from "react";
import classNames from "classnames";

const Link = ({ href, children }) => {
  return (
    <li className="mb-1.5 list-item list-disc">
      <a
        className="hover:underline"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </li>
  );
};

const Links = ({ title, links, children, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-col md:w-1/4 md:px-2.5 md:first:pl-0 md:last:pr-0",
        className,
      )}
    >
      <p className="font-title blue mb-6 font-extrabold">{title}</p>
      {links && links.length > 0 && (
        <ul className="pl-10">
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              {link.text}
            </Link>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="blow w-full bg-white">
      <footer className="wrapper-y-lg text-dark-red md:flex md:flex-row md:flex-wrap [&_>_*:not(:last-child)]:mb-7">
        <Links title="About Lorem Ipsum">
          <p>
            Morbi bibendum enim nec libero pretium, faucibus luctus ante varius.
            Nullam vulputate ultricies risus, at tincidunt orci pulvinar eget.
            <br />
            <br />
            Vestibulum aliquet mauris pulvinar, tristique arcu id, feugiat est.
          </p>
        </Links>
        <Links
          title="Useful Links"
          links={[
            { href: "#", text: "About Us" },
            { href: "#", text: "Contact Us" },
            { href: "#", text: "Login" },
            { href: "#", text: "Pricing" },
            { href: "#", text: "Affiliates" },
          ]}
        />
        <Links
          title="Important Links"
          links={[
            { href: "#", text: "Registration" },
            { href: "#", text: "Usage Policy" },
            { href: "#", text: "Terms and Conditions" },
            { href: "#", text: "Privacy Policy" },
            { href: "#", text: "Disclaimer" },
          ]}
        />
        <Links title="Contact Info">
          <div className="flex w-full flex-row items-center pl-6 text-left">
            <span className="mr-4 flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-dark-red pb-1 text-2xl font-semibold">
              @
            </span>
            <p className="flex flex-col">
              <strong>Email:</strong>
              <a href="mailto:support@outlook.com" className="hover:underline">
                support@outlook.com
              </a>
            </p>
          </div>
        </Links>
        <div className="flex w-full flex-row items-center justify-between py-10">
          <p>Copyright © 2024 Lorem Ipsum</p>
          <div className="flex flex-row items-center [&_svg]:block [&_svg]:flex [&_svg]:h-auto [&_svg]:w-4 [&_svg]:items-center [&_svg]:fill-dark-red">
            <a className="mr-4" href="#" title="Twitter link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a href="#" title="Instagram link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.\ */}
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-sm">
          <strong>Take Note</strong>: Nullam iaculis nisl vel efficitur
          accumsan. Donec dictum porttitor ornare. Nulla facilisi. Morbi
          bibendum enim nec libero pretium, faucibus luctus ante varius. Nullam
          vulputate ultricies risus, at tincidunt orci pulvinar eget. Phasellus
          at metus enim. Vestibulum aliquet mauris pulvinar, tristique arcu id,
          feugiat est. In ultrices porta orci nec maximus. Aliquam faucibus
          hendrerit molestie. Aliquam a dapibus sapien, nec sagittis tortor.
          Donec venenatis nunc eu vestibulum malesuada. Suspendisse lacinia
          aliquet vestibulum. Mauris vel odio ipsum.{" "}
          <a
            className="transition-colors duration-200 ease-in hover:text-dark-blue"
            href="#"
          >
            RMauris vel odio ipsum
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Footer;

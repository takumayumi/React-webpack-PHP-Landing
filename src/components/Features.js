import React from "react";
import Button from "./Button";

const Feature = () => (
  <div className="flex flex-col items-center gap-5 text-center [&_>_svg]:h-auto [&_>_svg]:max-h-10 [&_>_svg]:w-auto [&_>_svg]:max-w-10 [&_>_svg]:fill-blue">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      {/* !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
      <path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v4V304 448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z" />
    </svg>
    <h3 className="text-2xl font-bold">Convallis Justo Sed</h3>
    <p>
      Praesent vitae tempor nisi, euismod commodo elit. Fusce condimentum ipsum
      turpis, eu cursus quam consectetur sit amet. Curabitur sed porttitor eros.
      Etiam sed bibendum orci. Ut in cursus nunc. Donec eget porta metus, vel
      commodo sem. Ut elementum elementum nisl, at sodales felis vehicula quis.
      Donec eleifend gravida est sed lobortis.
    </p>
  </div>
);

const Features = () => {
  return (
    <div className="bg-dark-red text-yellow relative block w-full">
      <div className="wrapper-y-lg flex flex-col items-center gap-20 text-center">
        <div className="flex w-full flex-col gap-2.5">
          <h2 className="mb-5 text-3xl font-extrabold">Donec Ut Nunc Auctor</h2>
          <p>
            Etiam nec facilisis eros. Praesent vitae molestie mi. Pellentesque
            ullamcorper est in sem maximus, scelerisque pulvinar velit cursus.
            Integer sit amet posuere mi. Sed turpis elit, suscipit ac dictum
            sed, fermentum ut magna. Aliquam pretium sapien condimentum,
            imperdiet urna non, rutrum odio. Morbi eu facilisis dui. Vivamus a
            molestie tellus, eu tristique odio.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Features;

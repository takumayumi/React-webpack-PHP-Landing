import React from "react";

const Image = ({ className, srcSet, src, alt, width, height }) => {
  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={srcSet}
        width={width ? width : "0"}
        height={height ? height : "0"}
      />
      <img
        loading="lazy"
        src={src}
        alt={alt}
        width={width ? width : "0"}
        height={height ? height : "0"}
      />
    </picture>
  );
};

export default Image;

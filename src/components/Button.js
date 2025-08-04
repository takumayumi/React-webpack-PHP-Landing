/**
 * Button.js
 * A styled call-to-action button with hover and focus effects.
 *
 * Author: Yumi Takuma
 */

import React from "react";

const Button = () => {
  return (
    <a
      href="#"
      role="button"
      className="rounded bg-blue px-5 pb-2.5 pt-2 text-xl text-light-yellow transition-colors duration-300 hover:bg-dark-blue focus:bg-dark-blue"
    >
      Mauris vel odio ipsum
    </a>
  );
};

export default Button;

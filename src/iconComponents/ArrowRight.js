import * as React from "react";

function SvgArrowRight(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#arrow-right_svg__clip0)">
        <path
          d="M18.348 13.188l-10.32 10.32a1.68 1.68 0 11-2.376-2.377L14.782 12l-9.13-9.13A1.68 1.68 0 018.029.491l10.32 10.32c.328.328.491.758.491 1.188 0 .43-.164.86-.492 1.188z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="arrow-right_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgArrowRight;

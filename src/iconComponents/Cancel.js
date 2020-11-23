import * as React from "react";

function SvgCancel(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#cancel_svg__clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.853 12l8.557-8.557A2.017 2.017 0 1020.556.59L12 9.147 3.443.59A2.017 2.017 0 10.591 3.443l8.557 8.556L.59 20.556a2.017 2.017 0 002.852 2.853L12 14.852l8.557 8.557a2.017 2.017 0 002.853-2.852L14.853 12z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="cancel_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCancel;

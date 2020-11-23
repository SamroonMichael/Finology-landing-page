import * as React from "react";

function SvgPencil(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#pencil_svg__clip0)">
        <path
          d="M14.924 4.044l4.882 4.882L7.448 21.284l-4.88-4.882L14.925 4.044zm8.587-1.177L21.333.689a2.16 2.16 0 00-3.052 0l-2.085 2.086 4.882 4.882 2.433-2.433a1.664 1.664 0 000-2.357zM.014 23.264c-.09.4.272.759.672.661l5.44-1.319-4.88-4.882-1.232 5.54z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="pencil_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPencil;

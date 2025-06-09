import type { SVGProps } from "react";
const SvgOpenInNew = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#clip0_1037_293)">
      <path
        fill="#323232"
        d="M12.667 12.667H3.333V3.333H8V2H3.333C2.593 2 2 2.6 2 3.333v9.334C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V8h-1.333zM9.333 2v1.333h2.394L5.173 9.887l.94.94 6.554-6.554v2.394H14V2z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1037_293">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOpenInNew;

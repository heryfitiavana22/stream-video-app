import { SVGProps } from "react";
const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <rect width={4} height={16} x={14} y={4} rx={1} />
    <rect width={4} height={16} x={6} y={4} rx={1} />
  </svg>
);
export default Pause;

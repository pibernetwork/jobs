import type { SVGProps } from 'react';

export default function TestCafeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.57em"
      height="1em"
      viewBox="0 0 256 164"
      {...props}
    >
      <path
        fill="#404142"
        d="m158.898 109.302l-8.826 9.107h35.312l35.311 31.882H35.312l35.311-31.882h26.485l-8.839-9.107H61.797L0 163.954h256l-61.79-54.652z"
      ></path>
      <path
        fill="#37b5e5"
        d="M237.425 22.079L215.462 0l-92.223 92.757l-35.128-35.339l-21.956 22.086l57.09 57.418l114.18-114.836z"
      ></path>
    </svg>
  );
}

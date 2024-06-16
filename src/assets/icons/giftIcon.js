export default function GiftIcon({
  width = "2rem",
  height = "2rem",
  className,
  ...props
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.80566 10V17.1944C2.80566 17.7396 3.02223 18.2624 3.40772 18.6479C3.79321 19.0334 4.31605 19.25 4.86122 19.25H15.139C15.6842 19.25 16.207 19.0334 16.5925 18.6479C16.978 18.2624 17.1946 17.7396 17.1946 17.1944V10"
        stroke="#808191"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7083 4.86108H2.29167C1.44023 4.86108 0.75 5.55131 0.75 6.40275V8.45831C0.75 9.30975 1.44023 9.99997 2.29167 9.99997H17.7083C18.5598 9.99997 19.25 9.30975 19.25 8.45831V6.40275C19.25 5.55131 18.5598 4.86108 17.7083 4.86108Z"
        stroke="#808191"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.92236 4.86111C4.01792 3.71 3.83292 0.75 6.91625 0.75C10.4107 0.75 9.9482 4.86111 9.99959 4.86111C10.051 4.86111 9.63986 0.75 13.0829 0.75C16.1663 0.75 15.9607 3.71 15.0563 4.86111"
        stroke="#808191"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 19.25V4.86108"
        stroke="#808191"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BagIcon({
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
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.48438 4.21875V16.3594C1.48438 17.126 1.78892 17.8612 2.33102 18.4033C2.87312 18.9454 3.60836 19.25 4.375 19.25H13.625C14.3916 19.25 15.1269 18.9454 15.669 18.4033C16.2111 17.8612 16.5156 17.126 16.5156 16.3594V4.21875"
        stroke="#808191"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5156 4.21877L13.3822 1.08533C13.2741 0.978169 13.146 0.893387 13.0051 0.835846C12.8643 0.778306 12.7134 0.74914 12.5612 0.750019H5.43875C5.28658 0.74914 5.13573 0.778306 4.99486 0.835846C4.85398 0.893387 4.72585 0.978169 4.61781 1.08533L1.48438 4.21877H16.5156Z"
        stroke="#808191"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.53125 7.6875L5.88969 8.39281C6.12881 8.87539 6.498 9.28156 6.95563 9.56553C7.41325 9.84951 7.94111 9.99998 8.47968 10H9.52031C10.0589 9.99998 10.5867 9.84951 11.0444 9.56553C11.502 9.28156 11.8712 8.87539 12.1103 8.39281L12.4687 7.6875"
        stroke="#808191"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

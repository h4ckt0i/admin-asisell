export default function FacebookIcon({
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
      viewBox="0 0 26 26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5135 22.7464V13.8674H17.5089L17.9541 10.391H14.5135V8.17669C14.5135 7.17353 14.793 6.48669 16.2327 6.48669H18.0571V3.38728C17.1694 3.29215 16.2772 3.24622 15.3845 3.24969C12.7368 3.24969 10.919 4.86603 10.919 7.83328V10.3845H7.94305V13.8609H10.9255V22.7464H14.5135Z"
        fill="#0F0F0F"
      />
    </svg>
  );
}

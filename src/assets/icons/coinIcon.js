export default function CoinIcon({
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
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.5V5.6412C13.1556 5.97564 14.0748 6.8762 14.3871 8.04104C14.5301 8.57448 14.2136 9.12287 13.6802 9.26589C13.1468 9.40891 12.5984 9.09241 12.4554 8.55896C12.2985 7.97408 11.7261 7.5 11 7.5H10.7508C10.0211 7.5 9.5 8.05778 9.5 8.66079C9.5 9.17622 9.87813 9.66759 10.4753 9.79301L11.8676 10.0854C13.3768 10.4023 14.5 11.7016 14.5 13.2561C14.5 14.794 13.4169 16.0384 12 16.3962V16.5C12 17.0523 11.5523 17.5 11 17.5C10.4477 17.5 10 17.0523 10 16.5V16.3588C8.84441 16.0244 7.92517 15.1238 7.61287 13.959C7.46985 13.4255 7.78636 12.8771 8.3198 12.7341C8.85324 12.5911 9.40163 12.9076 9.54465 13.441C9.70146 14.0259 10.2739 14.5 11 14.5H11.1626C11.9401 14.5 12.5 13.905 12.5 13.2561C12.5 12.7016 12.0935 12.1765 11.4566 12.0427L10.0643 11.7503C8.5949 11.4417 7.5 10.1762 7.5 8.66079C7.5 7.13822 8.58876 5.91197 10 5.58552V5.5C10 4.94772 10.4477 4.5 11 4.5C11.5523 4.5 12 4.94772 12 5.5Z"
        fill="#808191"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z"
        fill="#808191"
      />
    </svg>
  );
}

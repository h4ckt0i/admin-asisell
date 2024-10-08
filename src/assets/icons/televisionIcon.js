export default function TelevisionIcon({
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
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 1.12502C0.75 0.733819 1.08579 0.416687 1.5 0.416687H16.5C16.9142 0.416687 17.25 0.733819 17.25 1.12502C17.25 1.51622 16.9142 1.83335 16.5 1.83335H15.75V9.62502H16.5C16.9142 9.62502 17.25 9.94215 17.25 10.3334C17.25 10.7246 16.9142 11.0417 16.5 11.0417H9.75V13.875H12C12.4142 13.875 12.75 14.1922 12.75 14.5834C12.75 14.9746 12.4142 15.2917 12 15.2917H6C5.58579 15.2917 5.25 14.9746 5.25 14.5834C5.25 14.1922 5.58579 13.875 6 13.875H8.25V11.0417H1.5C1.08579 11.0417 0.75 10.7246 0.75 10.3334C0.75 9.94215 1.08579 9.62502 1.5 9.62502H2.25V1.83335H1.5C1.08579 1.83335 0.75 1.51622 0.75 1.12502ZM3.75 1.83335V9.62502H14.25V1.83335H3.75Z"
        fill="#808191"
      />
    </svg>
  );
}

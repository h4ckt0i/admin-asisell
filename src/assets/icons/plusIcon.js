export default function PlusIcon({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0.25C10.5523 0.25 11 0.697715 11 1.25V9H18.75C19.3023 9 19.75 9.44771 19.75 10C19.75 10.5523 19.3023 11 18.75 11H11V18.75C11 19.3023 10.5523 19.75 10 19.75C9.44771 19.75 9 19.3023 9 18.75V11H1.25C0.697715 11 0.25 10.5523 0.25 10C0.25 9.44771 0.697715 9 1.25 9H9V1.25C9 0.697715 9.44771 0.25 10 0.25Z"
        fill="#808191"
      />
    </svg>
  );
}

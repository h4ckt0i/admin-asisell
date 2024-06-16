export default function LineChartIcon({
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
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="13.334" width="2.66667" height="16" rx="1" fill="#808191" />
      <rect
        x="6.66602"
        y="5.71429"
        width="2.66667"
        height="10.2857"
        rx="1"
        fill="#808191"
      />
      <rect y="8" width="2.66667" height="8" rx="1" fill="#808191" />
    </svg>
  );
}

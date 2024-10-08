export default function CategoryIcon({
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
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2C3 2.82843 2.32843 3.5 1.5 3.5C0.671573 3.5 0 2.82843 0 2C0 1.17157 0.671573 0.5 1.5 0.5C2.32843 0.5 3 1.17157 3 2ZM1.5 10.5C2.32843 10.5 3 9.82843 3 9C3 8.17157 2.32843 7.5 1.5 7.5C0.671573 7.5 0 8.17157 0 9C0 9.82843 0.671573 10.5 1.5 10.5ZM1.5 17.5C2.32843 17.5 3 16.8284 3 16C3 15.1716 2.32843 14.5 1.5 14.5C0.671573 14.5 0 15.1716 0 16C0 16.8284 0.671573 17.5 1.5 17.5ZM6 1C5.44772 1 5 1.44772 5 2C5 2.55228 5.44772 3 6 3H19C19.5523 3 20 2.55228 20 2C20 1.44772 19.5523 1 19 1H6ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H6ZM6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H6Z"
        fill="#808191"
      />
    </svg>
  );
}

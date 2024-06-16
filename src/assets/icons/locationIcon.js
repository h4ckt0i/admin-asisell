export default function LocationIcon({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99945 5.25C6.92838 5.25 5.24945 7.01288 5.24945 9.1875C5.24945 11.3621 6.92838 13.125 8.99945 13.125C11.0705 13.125 12.7495 11.3621 12.7495 9.1875C12.7495 7.01288 11.0705 5.25 8.99945 5.25ZM6.91612 9.1875C6.91612 7.97938 7.84886 7 8.99945 7C10.15 7 11.0828 7.97938 11.0828 9.1875C11.0828 10.3956 10.15 11.375 8.99945 11.375C7.84886 11.375 6.91612 10.3956 6.91612 9.1875Z"
        fill="#808191"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99935 0.4375C4.39192 0.4375 0.666016 4.38311 0.666016 9.23837C0.666016 15.3533 5.71572 18.5651 7.72804 19.6113L7.75037 19.6229C7.98786 19.7465 8.20037 19.8571 8.54219 19.9238C8.6922 19.9531 8.86349 19.9613 8.99935 19.9613C9.1352 19.9613 9.3065 19.9531 9.45651 19.9238C9.79833 19.8571 10.0108 19.7465 10.2483 19.6229L10.2707 19.6113C12.283 18.5651 17.3327 15.3533 17.3327 9.23837C17.3327 4.38311 13.6068 0.4375 8.99935 0.4375ZM2.33268 9.23837C2.33268 5.33896 5.3225 2.1875 8.99935 2.1875C12.6762 2.1875 15.666 5.33896 15.666 9.23837C15.666 14.2375 11.505 17.0168 9.53112 18.043C9.28536 18.1708 9.25413 18.1833 9.15174 18.2033C9.15243 18.2032 9.15256 18.2032 9.15174 18.2033C9.14862 18.2038 9.13432 18.2058 9.10772 18.2077C9.07675 18.21 9.03929 18.2113 8.99935 18.2113C8.95941 18.2113 8.92195 18.21 8.89098 18.2077C8.86438 18.2058 8.85026 18.2038 8.84715 18.2033C8.84632 18.2032 8.84645 18.2032 8.84715 18.2033C8.74475 18.1833 8.71333 18.1708 8.46757 18.043C6.49372 17.0168 2.33268 14.2375 2.33268 9.23837Z"
        fill="#808191"
      />
    </svg>
  );
}

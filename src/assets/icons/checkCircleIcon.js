export default function CheckCircleIcon({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1.80106C5.75329 1.80106 1.5 5.93926 1.5 11.044C1.5 16.1487 5.75329 20.2869 11 20.2869C16.2467 20.2869 20.5 16.1487 20.5 11.044C20.5 5.93926 16.2467 1.80106 11 1.80106ZM0.5 11.044C0.5 5.40192 5.20101 0.828125 11 0.828125C16.799 0.828125 21.5 5.40192 21.5 11.044C21.5 16.686 16.799 21.2598 11 21.2598C5.20101 21.2598 0.5 16.686 0.5 11.044Z"
        fill="#DCB61B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3536 7.4962L9.35359 15.2797C9.15833 15.4697 8.84175 15.4697 8.64648 15.2797L5.14648 11.8744L5.85359 11.1865L9.00004 14.2478L16.6465 6.80823L17.3536 7.4962Z"
        fill="#DCB61B"
      />
    </svg>
  );
}

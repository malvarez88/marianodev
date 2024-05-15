const ArrowIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({
  className,
  width = 80,
  height = 80,
  fill = "#0C0404",
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;

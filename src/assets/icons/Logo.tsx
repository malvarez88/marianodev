const Logo: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({
  className,
  width = 40,
  height = 40,
  fill = "#fff",
  ...rest
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 211.21 211.21"
    width={width}
    height={height}
    {...rest}
  >
    <path
      d="M148.07,156.9h-60.8c-4.87,0-8.82,3.95-8.82,8.82v36.67c0,4.87,3.95,8.82,8.82,8.82h115.11c4.87,0,8.82-3.95,8.82-8.82v-115.11c0-4.87-3.95-8.82-8.82-8.82h-36.67c-4.87,0-8.82,3.95-8.82,8.82v60.8c0,4.87-3.95,8.82-8.82,8.82Z"
      fill={fill}
      strokeWidth="0"
    />
    <path
      d="M132.76,0h-45.49c-4.87,0-8.82,3.95-8.82,8.82v60.8c0,4.87-3.95,8.82-8.82,8.82H8.82c-4.87,0-8.82,3.95-8.82,8.82v115.11c0,4.87,3.95,8.82,8.82,8.82h36.67c4.87,0,8.82-3.95,8.82-8.82v-60.8c0-4.87,3.95-8.82,8.82-8.82h60.8c4.87,0,8.82-3.95,8.82-8.82v-60.8c0-4.87,3.95-8.82,8.82-8.82h60.8c4.87,0,8.82-3.95,8.82-8.82V8.82c0-4.87-3.95-8.82-8.82-8.82h-69.63Z"
      fill={fill}
      strokeWidth="0"
    />
  </svg>
);

export default Logo;

// fill = "#EDEDED",

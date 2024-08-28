const AdressIcon = ({
  color = "#5085a5",
  width = 24,
  height = 24,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 100" >
    <path fill={color} d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
  </svg>
);

export default AdressIcon;

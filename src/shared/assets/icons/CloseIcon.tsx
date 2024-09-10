const CloseIcon = ({
  color = "#5085a5",
  width = 24,
  height = 24,
  onClick

}: {
  color?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      height: "30px",
      width: "30px",
      position: "absolute",
      right: "0",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960" >
      <path fill={color} d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
    </svg>
  </button>
);

export default CloseIcon;

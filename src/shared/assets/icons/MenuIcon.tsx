const MenuIcon = ({
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
      height: "50px",
      width: "50px",
      background: "#f7f9fb",
      position: "absolute",
      right: "0px"
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960" >
      <path fill={color} d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  </button>
);

export default MenuIcon;

const ArrowLeftIcon = ({
  color = "#f7f9fb",
  width = 36,
  height = 36,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: "50px",
      // width: "50px",
    }}
  >
    <svg width={width} height={height} viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
        fill={color}
      />
    </svg>
  </div>
);

export default ArrowLeftIcon;

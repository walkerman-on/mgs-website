import React from 'react';

const DocumentsIcon = ({
  color = "#5085a5",
  width = 24,
  height = 24,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    fill={color}
  >
    <path d="m298.39 248a4 4 0 0 0 2.86-6.8l-78.4-79.72a4 4 0 0 0 -6.85 2.81v71.71a12 12 0 0 0 12 12z" />
    <path d="m197 267a43.67 43.67 0 0 1 -13-31v-92h-72a64.19 64.19 0 0 0 -64 64v224a64 64 0 0 0 64 64h144a64 64 0 0 0 64-64v-152h-92a43.61 43.61 0 0 1 -31-13z" />
    <path d="m372 120h70.39a4 4 0 0 0 2.86-6.8l-78.4-79.72a4 4 0 0 0 -6.85 2.81v71.71a12 12 0 0 0 12 12z" />
    <path d="m372 152a44.34 44.34 0 0 1 -44-44v-92h-108a60.07 60.07 0 0 0 -60 60v36h42.12a40.81 40.81 0 0 1 28.88 12.14l109.16 111a41.11 41.11 0 0 1 11.83 29v135.86h53.05c32.51 0 58.95-26.92 58.95-60v-188z" />
  </svg>
);

export default DocumentsIcon;

import * as React from 'react'

export const Logo: React.FC<{
  width: string
  height: string
  fillColor?: string
}> = ({ width, height, fillColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={width}
    height={height}
  >
    <path
      d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.534692 21.534692 26 16 26 C 10.465308 26 6 21.534692 6 16 C 6 10.465308 10.465308 6 16 6 z M 22 16 C 22 19.325562 19.325562 22 16 22 L 16 24 C 20.406438 24 24 20.406438 24 16 L 22 16 z"
      fill={fillColor}
    />
  </svg>
)

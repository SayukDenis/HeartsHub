import React from "react";
import { Svg, Path } from "react-native-svg";
import { width } from "../../../SemiComponents/Constants/SizeConstants";
const CheckBoxSVG = ({
  widthOfCheckBox = width * 0.25,
  color = "black",
  strokeWidth = 3,
}) => {
  return (
    <Svg
      width={widthOfCheckBox * 0.26}
      height={widthOfCheckBox * 0.21}
      viewBox="0 0 26 21"
      fill="none"
    >
      <Path
        d="M2 9L10 18L24.5 2"
        stroke={color}
        strokeWidth={strokeWidth.toString()}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CheckBoxSVG;

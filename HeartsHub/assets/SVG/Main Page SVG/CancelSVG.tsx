import React from "react";
import { View } from "react-native";
import { Rect, Svg } from "react-native-svg";
import { width } from "../../../SemiComponents/Constants/SizeConstants";

interface CancelSVGProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const CancelSVG: React.FC<CancelSVGProps> = ({
  size = width * 0.06,
  color = "black",
  strokeWidth = 0.7,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Rect
        x="2.76758"
        y="0.505025"
        width="30.7248"
        height="3.20207"
        rx="1.60104"
        transform="rotate(45 2.76758 0.505025)"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Rect
        y="-0.494975"
        width="30.7248"
        height="3.20207"
        rx="1.60104"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 22.5785 0.855025)"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

export default CancelSVG;

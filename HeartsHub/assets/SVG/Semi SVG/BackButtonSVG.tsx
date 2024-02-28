import React from "react";
import { Svg, Path } from "react-native-svg";

interface BackButtonSVGProps {
  height: number;
}
const BackButtonSVG: React.FC<BackButtonSVGProps> = ({ height }) => {
  return (
    <Svg
      width={height * 0.15}
      height={height * 0.32}
      viewBox="0 0 15 32"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.31752 15.6124L14.547 28.4951C15.0914 29.1196 15.0914 30.1321 14.547 30.7565C14.0027 31.381 13.1201 31.381 12.5758 30.7565L0.408261 16.7978C0.123972 16.4717 -0.011845 16.0397 0.000808842 15.6124C-0.011845 15.1852 0.123972 14.7532 0.408261 14.4271L12.5758 0.468362C13.1201 -0.156121 14.0027 -0.15612 14.547 0.468362C15.0914 1.09284 15.0914 2.10533 14.547 2.72981L3.31752 15.6124Z"
        fill={"black"}
      />
    </Svg>
  );
};

export default BackButtonSVG;

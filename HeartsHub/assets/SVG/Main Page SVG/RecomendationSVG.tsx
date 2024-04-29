import React from "react";
import Svg, { Path } from "react-native-svg";
import { width } from "../../../SemiComponents/Constants/SizeConstants";

interface FooterContainerSVGProps {
  widthOfSVG?: number;
  color?: string;
}
export type FooterContainerSVGComponent = React.FC<FooterContainerSVGProps>;
const RecomendationSVG: FooterContainerSVGComponent = ({
  widthOfSVG = width * 0.25,
  color = "#B2848B",
}) => {
  return (
    <Svg
      width={widthOfSVG * 0.4}
      height={widthOfSVG * 0.32}
      viewBox="0 0 40 32"
      fill="none"
    >
      <Path
        d="M7.85 17.3H25.9V14.3H7.85V17.3ZM7.85 10.85H25.9V7.85H7.85V10.85ZM3 32C2.2 32 1.5 31.7 0.9 31.1C0.3 30.5 0 29.8 0 29V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H37C37.8 0 38.5 0.3 39.1 0.9C39.7 1.5 40 2.2 40 3V29C40 29.8 39.7 30.5 39.1 31.1C38.5 31.7 37.8 32 37 32H3ZM3 29H37V3H3V29Z"
        fill={color}
      />
    </Svg>
  );
};

export default RecomendationSVG;

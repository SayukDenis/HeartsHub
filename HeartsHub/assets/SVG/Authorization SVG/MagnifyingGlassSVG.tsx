import React from "react";
import Svg, { Path } from "react-native-svg";
import { height } from "../../../SemiComponents/Constants/SizeConstants";
interface MagnifyingGlassSVGProps {
  heightOfMagnifiyngGlass?: number;
}
const MagnifyingGlassSVG: React.FC<MagnifyingGlassSVGProps> = ({
  heightOfMagnifiyngGlass = height * 0.035,
}) => {
  return (
    <Svg
      width={heightOfMagnifiyngGlass}
      height={heightOfMagnifiyngGlass}
      viewBox="0 0 34 34"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5ZM19.7177 22.7069C17.6789 24.1512 15.1886 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 15.1111 24.1994 17.5353 22.8303 19.5403L33.9951 30.875L31.0251 33.845L19.7177 22.7069Z"
        fill="#E1AFB1"
      />
    </Svg>
  );
};

export default MagnifyingGlassSVG;

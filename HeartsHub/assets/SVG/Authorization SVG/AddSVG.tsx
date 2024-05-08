import React from "react";
import Svg, { Path } from "react-native-svg";
import { width } from "../../../SemiComponents/Constants/SizeConstants";
interface AddSVGProps {
  widthOfPlus?: number;
}

const AddSVG: React.FC<AddSVGProps> = ({ widthOfPlus = width * 0.09 }) => {
  return (
    <Svg
      width={widthOfPlus}
      height={widthOfPlus}
      viewBox="0 0 38 38"
      fill="none"
    >
      <Path d="M19 2V36" stroke="black" strokeWidth="4" strokeLinecap="round" />
      <Path
        d="M2 19L36 19"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AddSVG;

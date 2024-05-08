import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { width } from '../../../SemiComponents/Constants/SizeConstants';

const RightArrowSvg = ({ widthOfSVG=width*0.23, color="white" }:any) => (
  <Svg width={widthOfSVG*0.12} height={widthOfSVG*0.21} viewBox="0 0 12 21" fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.05254 10.5243L1.22158 18.54C0.739145 19.0338 0.739145 19.8344 1.22158 20.3282C1.70401 20.822 2.48619 20.822 2.96863 20.3282L11.6392 11.4532C11.889 11.1975 12.0095 10.8594 12.0005 10.5243C12.0095 10.1892 11.889 9.85119 11.6392 9.59545L2.96863 0.720455C2.48619 0.226645 1.70401 0.226645 1.22158 0.720455C0.739145 1.21427 0.739145 2.01489 1.22158 2.5087L9.05254 10.5243Z"
    />
  </Svg>
);

export default RightArrowSvg;

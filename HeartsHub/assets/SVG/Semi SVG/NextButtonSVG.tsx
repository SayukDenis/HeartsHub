import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { heightOfAuthorizationButton } from '../../../SemiComponents/Constants/SizeConstants';

interface BackButtonSVGProps {
    height?: number;
    color?:string;
  }
const NextButtonSVG:React.FC<BackButtonSVGProps>= ({ height=heightOfAuthorizationButton * 2,color="black" }) => (
  <Svg width={height * 0.15}
  height={height * 0.32} viewBox="0 0 15 32" fill="none">
    <Path
      fill={color}
      d="M11.6815 15.6125L0.451975 28.4952C-0.0923738 29.1197 -0.0923729 30.1322 0.451975 30.7566C0.996323 31.3811 1.87888 31.3811 2.42323 30.7566L14.5908 16.7979C14.8751 16.4718 15.0109 16.0398 14.9982 15.6125C15.0109 15.1852 14.8751 14.7532 14.5908 14.4271L2.42323 0.468362C1.87888 -0.156121 0.996323 -0.15612 0.451975 0.468362C-0.0923729 1.09284 -0.0923738 2.10533 0.451975 2.72981L11.6815 15.6125Z"
    />
  </Svg>
);

export default NextButtonSVG;

import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
interface BackGroundGradientViewProps {
  children?: ReactNode;
}

const BackGroundGradinetView: React.FC<BackGroundGradientViewProps> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={["#EB8181", "#5B0010"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};
export default BackGroundGradinetView;

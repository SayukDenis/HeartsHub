import { ReactNode } from "react";
import { View } from "react-native";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";

interface SemiMainTopContainerProps {
  children?: ReactNode;
}

const SemiMainTopContainer: React.FC<SemiMainTopContainerProps> = ({
  children,
}) => {
  return (
    <View
      style={{
        width: width,
        height: height * 0.6,
        //backgroundColor: "blue"
      }}
    >
      {children}
    </View>
  );
};

export default SemiMainTopContainer;

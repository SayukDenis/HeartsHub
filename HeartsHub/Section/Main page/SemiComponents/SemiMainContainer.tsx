import { ReactNode } from "react";
import { View } from "react-native";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";

interface SemiMainContainerProps {
  children?: ReactNode;
}

const SemiMainContainer: React.FC<SemiMainContainerProps> = ({ children }) => {
  return (
    <View
      style={{
        width: width,
        flex:1
        //backgroundColor: "red"
      }}
    >
      {children}
    </View>
  );
};

export default SemiMainContainer;

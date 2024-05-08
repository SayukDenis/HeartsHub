import { ReactNode } from "react";
import { View } from "react-native";
import { width } from "../../../SemiComponents/Constants/SizeConstants";

interface SemiMainFooterContainerProps {
  children?: ReactNode;
}

const SemiMainFooterContainer: React.FC<SemiMainFooterContainerProps> = ({
  children,
}) => {
  return (
    <View
      style={{
        flex:1,
        //backgroundColor:"red"

      }}
    >
      {children}
    </View>
  );
};

export default SemiMainFooterContainer;

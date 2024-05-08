import { Text, View } from "react-native";
import {
  height,
  statusBarHeight,
  width,
} from "../../../SemiComponents/Constants/SizeConstants";
import { ReactNode } from "react";

interface HeaderOfMainCarouselPageProps {
  leftText?: string;
  rightChildren?:ReactNode;
}
const HeaderOfMainCarouselPage: React.FC<HeaderOfMainCarouselPageProps> = ({
  leftText,
  rightChildren,
}) => {
  return (
    <View
      style={{
        width,
        height: height * 0.1,
        marginTop: statusBarHeight,
        alignSelf: "center",
        justifyContent: "center",
        paddingHorizontal: width * 0.075,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: height * 0.025,
            fontWeight: "800",
            alignSelf: "center",
          }}
        >
          {leftText}
        </Text>
        {rightChildren}
      </View>
    </View>
  );
};
export default HeaderOfMainCarouselPage;

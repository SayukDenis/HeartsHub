import { View } from "react-native";
import { ReactNode } from "react";
import { margin, widthOfPhotoContainer } from "./Exports";

interface PhotoContainerProps {
  children?: ReactNode;
  widthOfContainer?: number;
  isClicable?: boolean;
}
const PhotoContainer: React.FC<PhotoContainerProps> = ({
  children = null,
  widthOfContainer = widthOfPhotoContainer,
  isClicable = true,
}) => {
  return (
    <View
      style={{
        width: widthOfContainer,
        aspectRatio: 1,
        margin: margin / 2,
        borderRadius: 30,
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        {children}
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: widthOfContainer,
          aspectRatio: 1,
          opacity: isClicable ? 0.6 : 0.4,
          zIndex: -1,
          position: "absolute",
        }}
      />
    </View>
  );
};

export default PhotoContainer;

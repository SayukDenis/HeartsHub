import React from "react";
import { View, Text } from "react-native";
import { isCurrentDigit, textStyle, viewOfDigit, viewStyle } from "./Exports";



interface ScaleOfCameraContainerProps {
  digit: number;
  zoom: number;
}

const ScaleOfCameraContainer: React.FC<ScaleOfCameraContainerProps> = ({
  digit,
  zoom,
}) => {
  return (
    <View style={viewStyle.wrapContainer}>
      <View
        style={[
          viewStyle.container,
          isCurrentDigit(digit, zoom)
            ? viewStyle.selectContainer
            : viewStyle.nonSelectContainer,
        ]}
      >
        <Text
          style={[
            textStyle.text,
            isCurrentDigit(digit, zoom)
              ? textStyle.selectText
              : textStyle.nonSelectText,
          ]}
        >
          {viewOfDigit(digit, zoom)}
        </Text>
        <View style={viewStyle.backGroundView} />
      </View>
    </View>
  );
};

export default ScaleOfCameraContainer;

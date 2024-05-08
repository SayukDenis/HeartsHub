import { StyleSheet } from "react-native";
import { height, width } from "../../../../SemiComponents/Constants/SizeConstants";
const maxHeightOfCircle = height * 0.04;
const minHeightOfCircle = height * 0.03;
const textStyle = StyleSheet.create({
    text: {
      alignSelf: "center",
    },
    nonSelectText: { color: "white" },
    selectText: { color: "#FFDE69" },
  });
  const viewStyle = StyleSheet.create({
    container: {
      alignSelf: "center",
      overflow: "hidden",
      justifyContent: "center",
      borderRadius: height * 0.04,
      // backgroundColor:"black",
      aspectRatio: 1,
    },
    nonSelectContainer: { width: minHeightOfCircle },
    selectContainer: { width: maxHeightOfCircle },
    backGroundView: {
      position: "absolute",
      width: maxHeightOfCircle,
      aspectRatio: 1,
      backgroundColor: "gray",
      zIndex: -1,
      opacity: 0.4,
    },
    wrapContainer: {
      justifyContent: "center",
      //backgroundColor: "white",
      height: maxHeightOfCircle,
      aspectRatio: 1,
      alignSelf: "center",
    },
  });
  const myFixedNumber = (num: number) => {
    const result = Math.floor(num * 10) / 10;
    return result;
  };
  const isCurrentDigit = (digit: number, zoom: number): boolean => {
    const mathFloordigit = Math.floor(zoom / 0.01 + 1);
    if (mathFloordigit == digit) {
      return true;
    }
    if (digit == 3 && mathFloordigit > 3) {
      return true;
    }
    return false;
  };
   const viewOfDigit = (digit: number, zoom: number): string => {
    if (isCurrentDigit(digit, zoom)) {
      return (
        myFixedNumber(zoom / 0.01 + 1)
          .toString()
          .replace(/\.0$/, "") + "x"
      );
    }
    return digit.toString();
  };
const margin = 20;
const widthOfPhotoContainer = (width - margin * 4) / 3;
  export { textStyle, viewStyle, myFixedNumber, isCurrentDigit, viewOfDigit,maxHeightOfCircle,minHeightOfCircle,margin,widthOfPhotoContainer };
  
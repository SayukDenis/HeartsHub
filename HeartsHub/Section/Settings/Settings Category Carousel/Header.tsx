import { TouchableOpacity } from "react-native";
import {
  height,
  statusBarHeight,
  width,
} from "../../../SemiComponents/Constants/SizeConstants";
import CancelSVG from "../../../assets/SVG/Main Page SVG/CancelSVG";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
const navigation=useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();

      }}
      style={{
        position: "absolute",
        top: statusBarHeight + height * 0.034,
        opacity: 0.5,
        right: width * 0.075,
        zIndex:10
      }}
    >
      <CancelSVG color="white" />
    </TouchableOpacity>
  );
};
export default Header;

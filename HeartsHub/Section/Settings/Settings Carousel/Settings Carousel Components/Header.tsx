import { Text, TouchableOpacity, View } from "react-native";
import {
    height,
  statusBarHeight,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import CancelSVG from "../../../../assets/SVG/Main Page SVG/CancelSVG";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  topic: string;
}
const Header: React.FC<HeaderProps> = ({ topic }) => {
  const navigation=useNavigation();
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
            fontSize: height * 0.025625,
            fontWeight: "800",
            alignSelf: "center",
          }}
        >
          {topic}
        </Text>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <CancelSVG color="white"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

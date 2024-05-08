import { Text, TouchableOpacity, View } from "react-native";
import { SettingsCategory } from "../SettingsCarousel";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import RightArrowSvg from "../../../../assets/SVG/Semi SVG/RightArrowSVG";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectSecondPassword } from "../../../../redux/Authorization/selectors";
interface SettingsCategoryPageProps {
  settingsCategory: SettingsCategory;
}

const SettingsCategoryPage: React.FC<SettingsCategoryPageProps> = ({
  settingsCategory,
}) => {
  const navigation = useNavigation();
  
  return (
    <View style={{ width: width }}>
      {settingsCategory.changeSettingsTopics.map(
        (topic: string, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.navigate({
                    name: settingsCategory.navigateTo,
                    params: {
                      id: index,
                    },
                  })
                );
              }}
            >
              <View
                style={{
                  height: height * 0.058,
                  flexDirection: "row",
                  paddingHorizontal: width * 0.05,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: height * 0.021,
                    fontWeight: "700",
                  }}
                >
                  {topic}
                </Text>
                <View style={{ alignSelf: "center" }}>
                  <RightArrowSvg />
                </View>
              </View>
              <View
                style={{ width: width, height: 3, backgroundColor: "#9D3B44" }}
              />
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};
export default SettingsCategoryPage;

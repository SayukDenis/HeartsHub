import { Text, View } from "react-native";
import RecomendationSVG, {
  FooterContainerSVGComponent,
} from "../../../assets/SVG/Main Page SVG/RecomendationSVG";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";

interface FooterChoiceContainerProps {
  SVG: FooterContainerSVGComponent;
  text: string;
  isSelected: boolean;
}

const FooterChoiceContainer: React.FC<FooterChoiceContainerProps> = ({
  SVG,
  text,
  isSelected,
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        //backgroundColor: "red",
        width: width * 0.2,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          height: height * 0.05,
          marginBottom: 5,
        }}
      >
        <SVG color={isSelected ? "white" : "#B2848B"} />
      </View>
      <Text
        style={{
          color: isSelected ? "white" : "#B2848B",
          fontSize: height * 0.013,
          alignSelf: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default FooterChoiceContainer;

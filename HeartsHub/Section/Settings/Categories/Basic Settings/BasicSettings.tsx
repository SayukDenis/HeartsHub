import SettingsCategoryCarousel from "../../Settings Category Carousel/SettingsCategoryCarousel";
import Facade from "../../../Authorization/Abstract classes and interfaces/Facade/Facade";

interface BasicSettingsProps {
  route: any;
}

const BasicSettings: React.FC<BasicSettingsProps> = ({ route }) => {
  return (
    <SettingsCategoryCarousel
      listOfPages={new Facade().getBasicRegistrationPages()}
      id={route.params.id}
    />
  );
};

export default BasicSettings;

import Facade from "../../../Authorization/Abstract classes and interfaces/Facade/Facade";
import SettingsCategoryCarousel from "../../Settings Category Carousel/SettingsCategoryCarousel";

interface AllAboutYouSettingsProps {
  route: any;
}

const AllAboutYouSettings: React.FC<AllAboutYouSettingsProps> = ({ route }) => {
  return (
    <SettingsCategoryCarousel
      listOfPages={new Facade().getAllAboutYouRegistrationPages()}
      id={route.params.id}
    />
  );
};

export default AllAboutYouSettings;

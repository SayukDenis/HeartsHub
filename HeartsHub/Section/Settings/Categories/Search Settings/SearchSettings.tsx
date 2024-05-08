import Facade from "../../../Authorization/Abstract classes and interfaces/Facade/Facade";
import SettingsCategoryCarousel from "../../Settings Category Carousel/SettingsCategoryCarousel";

interface SearchSettingsProps {
  route: any;
}

const SearchSettings: React.FC<SearchSettingsProps> = ({ route }) => {
  return (
    <SettingsCategoryCarousel
      listOfPages={new Facade().getSearchSettingsRegistrationPages()}
      id={route.params.id}
    />
  );
};

export default SearchSettings;

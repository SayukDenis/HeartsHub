import Facade from "../../../Authorization/Abstract classes and interfaces/Facade/Facade";
import context from "../../../Authorization/Abstract classes and interfaces/Strategy/Context";
import SettingsCategoryCarousel from "../../Settings Category Carousel/SettingsCategoryCarousel";

interface SearchSettingsProps {
  route: any;
}

const SearchSettings: React.FC<SearchSettingsProps> = ({ route }) => {
      const strategy:any=SettingsCategoryCarousel
      context.listOfPages=new Facade().getSearchSettingsRegistrationPages()
      context.strategyProps={id:route.params.id}
      context.setStrategy(strategy)
      return context.render()
};

export default SearchSettings;

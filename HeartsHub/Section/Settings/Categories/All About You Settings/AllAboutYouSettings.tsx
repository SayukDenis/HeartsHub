import Facade from "../../../Authorization/Abstract classes and interfaces/Facade/Facade";
import context from "../../../Authorization/Abstract classes and interfaces/Strategy/Context";
import SettingsCategoryCarousel from "../../Settings Category Carousel/SettingsCategoryCarousel";

interface AllAboutYouSettingsProps {
  route: any;
  navigation:any
}

const AllAboutYouSettings: React.FC<AllAboutYouSettingsProps> = ({ route,navigation }) => {

      const strategy:any=SettingsCategoryCarousel
      context.listOfPages=new Facade().getAllAboutYouRegistrationPages()
      context.strategyProps={id:route.params.id}
      context.setStrategy(strategy)
      return context.render()
};

export default AllAboutYouSettings;

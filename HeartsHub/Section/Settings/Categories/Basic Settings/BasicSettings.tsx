import SettingsCategoryCarousel from "../../Settings Category Carousel/SettingsCategoryCarousel";
import Facade from "../../../Authorization/Abstract classes and interfaces/Facade/Facade";
import context from "../../../Authorization/Abstract classes and interfaces/Strategy/Context";

interface BasicSettingsProps {
  route: any;
}

const BasicSettings: React.FC<BasicSettingsProps> = ({ route }) => {
  const strategy:any=SettingsCategoryCarousel
      context.listOfPages=new Facade().getBasicRegistrationPages()
      context.strategyProps={id:route.params.id}
      context.setStrategy(strategy)
      return context.render()

  
};

export default BasicSettings;

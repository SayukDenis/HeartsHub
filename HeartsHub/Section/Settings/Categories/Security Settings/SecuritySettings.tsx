import SettingsCategoryCarousel from "../../Settings Category Carousel/SettingsCategoryCarousel";
import Facade from "../../../Authorization/Abstract classes and interfaces/Facade/Facade";
import SecurityStrategy from "./SecurityStrategy/SecurityStrategy";
import { useSelector } from "react-redux";
import { selectSecondPassword } from "../../../../redux/Authorization/selectors";
import context from "../../../Authorization/Abstract classes and interfaces/Strategy/Context";

interface SecuritySettingsProps {
  route: any;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ route }) => {
  const secondPassword = useSelector(selectSecondPassword);
  const getId = (index: number) => {
    if (index == 1 && secondPassword != "") {
      return index + 2;
    }
    return index;
  };
      const strategy:any=SecurityStrategy
      context.listOfPages=new Facade().getSecuritySettingsRegistrationPages()[
        getId(route.params.id as any)
      ]
      context.strategyProps={id:route.params.id}
      context.setStrategy(strategy)
      return context.render()
};

export default SecuritySettings;

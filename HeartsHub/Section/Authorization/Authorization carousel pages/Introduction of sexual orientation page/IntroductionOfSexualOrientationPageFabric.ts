import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import IntroductionOfSexualOrientationPage from "./IntroductionOfSexualOrientationPage";


class IntroductionOfSexualOrientationPageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:IntroductionOfSexualOrientationPage,index})
    }
}
export default IntroductionOfSexualOrientationPageFabric;
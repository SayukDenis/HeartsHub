import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import SelfInformationPage from "./SelfInformationPage";

class SelfInformationPageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:SelfInformationPage,index})
    }
}
export default SelfInformationPageFabric;
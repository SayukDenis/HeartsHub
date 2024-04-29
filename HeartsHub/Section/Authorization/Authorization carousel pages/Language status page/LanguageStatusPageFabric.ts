import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import LanguageStatusPage from "./LanguageStatusPage";

class LanguageStatusPageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:LanguageStatusPage,index})
    }
}
export default LanguageStatusPageFabric;
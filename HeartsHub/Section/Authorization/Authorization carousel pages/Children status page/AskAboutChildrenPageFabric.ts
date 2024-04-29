import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import AskAboutChildrenPage from "./AskAboutChildrenPage";

class AskAboutChildrenPageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:AskAboutChildrenPage,index})
    }
}
export default AskAboutChildrenPageFabric;
import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import AlcoholStatusPage from "./AlcoholStatusPage";

class AlcoholStatusPageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:AlcoholStatusPage,index})
    }
}
export default AlcoholStatusPageFabric;
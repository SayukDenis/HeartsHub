import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import SmokeStatusPage from "./SmokeStatusPage";

class SmokeStatusPageFabric extends FabricOfRegistrationPages{
    factoryMethod(index: number) {
        return  new Adapter({Adaptee:SmokeStatusPage,index})
    }
}
export default SmokeStatusPageFabric;
import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import LocationPage from "./LocationPage";

class LocationPageFabric extends FabricOfRegistrationPages {
    factoryMethod(index: number) {
        return new Adapter({ Adaptee: LocationPage, index })
    }
}
export default LocationPageFabric;
import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import SearchStatusPage from "./SearchStatusPage";

class SearchStatusPageFabric extends FabricOfRegistrationPages {
    factoryMethod(index: number) {
        return new Adapter({ Adaptee: SearchStatusPage, index })
    }
}
export default SearchStatusPageFabric;
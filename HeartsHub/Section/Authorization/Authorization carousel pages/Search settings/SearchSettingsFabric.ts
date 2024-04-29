import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import SearchSettingsPage from "./SearchSettings";



class SearchSettingsFabric extends FabricOfRegistrationPages {
    factoryMethod(index: number) {
        return new Adapter({ Adaptee: SearchSettingsPage, index })
    }
}
export default SearchSettingsFabric;
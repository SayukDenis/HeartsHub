import Adapter from "../../Abstract classes and interfaces/Adapter/Adapter";
import { FabricOfRegistrationPages } from "../../Abstract classes and interfaces/Fabric method/FabricMethod";
import ChoosePhotoPage from "./ChoosePhotoPage";


class ChoosePhotoPageFabric extends FabricOfRegistrationPages {
    factoryMethod(index: number) {
        return new Adapter({ Adaptee: ChoosePhotoPage, index })
    }
}
export default ChoosePhotoPageFabric;
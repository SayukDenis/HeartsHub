import { updateAuthObjectInDao } from "../../../../Local dao/Initialiazation";
import { ICommand } from "./Command";

interface SaveInLocalStorageCommandProps {
    attribute: string
    variableField:any
}

class SaveInLocalStorageCommand implements ICommand {
    private attribute: string
    private variableField:any
    constructor(props: SaveInLocalStorageCommandProps) {
        this.attribute = props.attribute
        this.variableField=props.variableField

    }
    update() {
       updateAuthObjectInDao(this.attribute,this.variableField)
    }
}


export default SaveInLocalStorageCommand;
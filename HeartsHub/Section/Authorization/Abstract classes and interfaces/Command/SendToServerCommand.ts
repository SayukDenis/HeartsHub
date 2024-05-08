import { ICommand } from "./Command";

interface SendToServerCommandProps {
    attribute: string
    variableField:any
}

class SendToServerCommand implements ICommand {
    private attribute: string
    private variableField:any
    constructor(props: SendToServerCommandProps) {
        this.attribute = props.attribute
        this.variableField=props.variableField
    }
    update() {
        console.log(`SEND TO SERVER ${this.attribute}: ${this.variableField} `)
    }
}


export default SendToServerCommand;
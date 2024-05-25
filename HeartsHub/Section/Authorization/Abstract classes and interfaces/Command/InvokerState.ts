import { Dispatch, UnknownAction } from "redux"
import Command, { CommandProps } from "./Command"
import SaveInLocalStorageCommand from "./SaveInLocalStorageCommand"
import UnauthorizedInvoker, { IInvoker } from "./UnauthorizedInvoker"
import SendToServerCommand from "./SendToServerCommand"


interface InvokerStateProps extends CommandProps {
    attribute: string
    id:string
}

class InvokerState {
    private dispatch: Dispatch<UnknownAction>
    private action: (arg: any) => any
    private variableField: any
    private id:string
    private attribute: string
    private Invoker: IInvoker
    constructor(props: InvokerStateProps) {
        this.dispatch = props.dispatch
        this.action = props.action
        this.variableField = props.variableField
        this.id = props.id
        this.attribute = props.attribute
        this.Invoker = this.getInvokerState()
    }
    private getInvokerState(): IInvoker {
        const firstCommand: Command = new Command({ dispatch: this.dispatch, action: this.action, variableField: this.variableField })
        const secondCommand: SaveInLocalStorageCommand = new SaveInLocalStorageCommand({ variableField: this.variableField, attribute: this.attribute })
        const thirdCommand = new SendToServerCommand({ variableField: this.variableField, attribute: this.attribute })
        let Invoker: IInvoker= new UnauthorizedInvoker({ firstCommand: firstCommand, secondCommand: secondCommand, thirdCommand: thirdCommand,id:this.id,context:this })
        
        return Invoker
    }
    public transitionTo(invoker:IInvoker){
        this.Invoker=invoker
    }
    request() {
        this.Invoker.updateVariable()
    }


}



export default InvokerState;
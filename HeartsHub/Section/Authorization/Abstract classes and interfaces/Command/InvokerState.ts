import { Dispatch, UnknownAction } from "redux"
import Command, { CommandProps } from "./Command"
import SaveInLocalStorageCommand from "./SaveInLocalStorageCommand"
import UnauthorizedInvoker, { IInvoker } from "./UnauthorizedInvoker"
import AuthorizedInvoker from "./AuthorizedInvoker"
import SendToServerCommand from "./SendToServerCommand"

interface InvokerStateProps extends CommandProps {
    isAuthorized: boolean
    attribute: string
}

class InvokerState {
    private dispatch: Dispatch<UnknownAction>
    private action: (arg: any) => any
    private variableField: any
    private isAuthorized: boolean
    private attribute: string
    private Invoker: IInvoker
    constructor(props: InvokerStateProps) {
        this.dispatch = props.dispatch
        this.action = props.action
        this.variableField = props.variableField
        this.isAuthorized = props.isAuthorized
        this.attribute = props.attribute
        this.Invoker = this.getInvokerState()

    }
    private getInvokerState(): IInvoker {
        const firstCommand: Command = new Command({ dispatch: this.dispatch, action: this.action, variableField: this.variableField })
        const secondCommand: SaveInLocalStorageCommand = new SaveInLocalStorageCommand({ variableField: this.variableField, attribute: this.attribute })
        let Invoker: IInvoker;
        if (this.isAuthorized) {
            const thirdCommand = new SendToServerCommand({ variableField: this.variableField, attribute: this.attribute })
            Invoker = new AuthorizedInvoker({ firstCommand: firstCommand, secondCommand: secondCommand, thirdCommand: thirdCommand })
        }
        else {
            Invoker = new UnauthorizedInvoker({ firstCommand: firstCommand, secondCommand: secondCommand })
        }
        return Invoker
    }
    request() {
        this.Invoker.updateVariable()
    }


}

export default InvokerState;
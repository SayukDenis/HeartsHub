import { ICommand } from "./Command";
import UnauthorizedInvoker, { UnauthorizedInvokerProps } from "./UnauthorizedInvoker";

export interface AuthorizedInvokerProps extends UnauthorizedInvokerProps {
    thirdCommand: ICommand;
}

class AuthorizedInvoker extends UnauthorizedInvoker {
    private thirdCommand: ICommand;

    constructor(props: AuthorizedInvokerProps) {
        super(props);
        this.thirdCommand = props.thirdCommand;
    }

    updateVariable() {
        super.updateVariable(); 
        this.thirdCommand.update();
    }
}

export default AuthorizedInvoker;

import Command from "../Command/Command";
import { setIsEnableNextButtonAuthorization, setIsPressedNextButtonAuthorization } from "../../../../redux/Authorization/Actions";


interface IState {
    defineState: (arrayOfBindings: any[], isPressedNextButtonAuthorization: boolean) => void
}
interface StateProps {
    checkingForEnableButton: (arrayOfBindings: any[]) => boolean;
    checkingGoToNextPage: (arrayOfBindings: any[]) => void;
    command: Command;
}

export class State implements IState {
    checkingForEnableButton: (arrayOfBindings: any[]) => boolean;
    checkingGoToNextPage: (arrayOfBindings: any[]) => void;
    command: Command
    constructor(props: StateProps) {
        this.checkingForEnableButton = props.checkingForEnableButton;
        this.checkingGoToNextPage = props.checkingGoToNextPage;
        this.command = props.command;
    }
    defineState(arrayOfBindings: any[], isPressedNextButtonAuthorization: boolean) {
       
        if (isPressedNextButtonAuthorization) {
            this.goToNextButton(arrayOfBindings)
        }
        this.setEnableButton(arrayOfBindings)

    }
    private setEnableButton(arrayOfBindings: any[]) {
        const isValid = this.checkingForEnableButton(arrayOfBindings);
        if (isValid) {
            this.command.update(setIsEnableNextButtonAuthorization, true)
        }
        else {
            this.command.update(setIsEnableNextButtonAuthorization, false)
        }
        return isValid;
    }
    private goToNextButton(arrayOfBindings: any[]) {
        this.command.update(setIsPressedNextButtonAuthorization, false);
        if (this.setEnableButton(arrayOfBindings)) {
            
            this.checkingGoToNextPage(arrayOfBindings);
        }

    }
}
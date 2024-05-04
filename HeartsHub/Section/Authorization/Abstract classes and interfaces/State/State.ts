import Command from "../Command/Command";
import { setIsEnableNextButtonAuthorization, setIsPressedNextButtonAuthorization } from "../../../../redux/Authorization/Actions";
import { Dispatch, UnknownAction } from "redux";


interface IState {
    defineState: (arrayOfBindings: any[], isPressedNextButtonAuthorization: boolean) => void
}
interface StateProps {
    checkingForEnableButton: (arrayOfBindings: any[]) => boolean;
    checkingGoToNextPage: (arrayOfBindings: any[]) => void;
    dispatch: Dispatch<UnknownAction>
}

export class State implements IState {
    checkingForEnableButton: (arrayOfBindings: any[]) => boolean;
    checkingGoToNextPage: (arrayOfBindings: any[]) => void;
    dispatch: Dispatch<UnknownAction>
    constructor(props: StateProps) {
        this.checkingForEnableButton = props.checkingForEnableButton;
        this.checkingGoToNextPage = props.checkingGoToNextPage;
        this.dispatch = props.dispatch
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
            
            this.dispatch(setIsEnableNextButtonAuthorization(true))
        }
        else {
            this.dispatch(setIsEnableNextButtonAuthorization(false))
        }
        return isValid;
    }
    private goToNextButton(arrayOfBindings: any[]) {
        this.dispatch(setIsPressedNextButtonAuthorization(false));
        if (this.setEnableButton(arrayOfBindings)) {

            this.checkingGoToNextPage(arrayOfBindings);
        }

    }
}
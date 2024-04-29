import { Component } from "react";
import { State } from "../State/State";
import Command from "../Command/Command";
import { setFulfillmentOfTheConditionForTheNextButtonAuthorization, setIsPressedNextButtonAuthorization } from "../../../../redux/Authorization/Actions";

export abstract class RegistrationPage extends Component {
    index: boolean;
    command: Command;
    State: State;
    constructor(props: any) {
        super(props);
        this.index = props.index;
        this.command = new Command({
            dispatch: props.dispatch,
        });
        this.State = this.returnState()
    }
    protected checkingGoToNextPage(arrayOfBindings: any[]): void {
        this.command.update(setIsPressedNextButtonAuthorization, false);
        this.command.update(
            setFulfillmentOfTheConditionForTheNextButtonAuthorization,
            true
        );
    }
    protected checkingForEnableButton(arrayOfBindings: any[]) {
        return true
    }
    protected abstract defineState(): void;
    public returnState(): State {
        return new State({
            checkingForEnableButton: this.checkingForEnableButton,
            checkingGoToNextPage: this.checkingGoToNextPage,
            command: this.command
        })
    }
}
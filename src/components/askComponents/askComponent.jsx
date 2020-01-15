import React from "react";
import AskInputComponent from "./askInputComponent.jsx";
import TooltipComponent from "../tooltipComponents/tooltipComponent.jsx";

class AskComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "", valid: false };

        this.validateInput = this.validateInput.bind(this);
        this.submitInput = this.submitInput.bind(this);
    };

    // Updates the current value state to the given input
    // Sets the valid state to true if the given input ends with a question mark 
    validateInput(input) {
        if (input.slice(-1) === "?") {
            this.setState({ value: input, valid: true });
        } else {
            this.setState({ value: input, valid: false });
        }
    };

    // Logs the current question to the console and resets the input
    // TODO: Upload the question to the firebase database
    submitInput() {
        const valid = this.state.valid;

        if(this.state.valid) {
            console.log(this.state.value)
            this.setState({ value: "", valid: false });
        }
    }

    render() {
        const containerClassName = "centered";
        const cardClassName = "ask-card centered";
        const value = this.state.value;
        const valid = this.state.valid;
        const icon = `check_circle_outline`;
        const iconClassName = "submit-checkmark";
        const validClassName = "submit-checkmark-valid";
        const text = "Add a question mark to submit";
        
        return (
            <div className={containerClassName}>
                <div className={cardClassName}>
                    <AskInputComponent
                        validateInput={this.validateInput}
                        submitInput={this.submitInput}
                        value={value}
                        valid={valid} />

                    <TooltipComponent
                        onClickCallback={this.submitInput}
                        valid={valid}
                        icon={icon}
                        iconClassName={iconClassName}
                        validClassName={validClassName}
                        text={text} />
                </div>
            </div>
        );
    };
}

export default AskComponent;
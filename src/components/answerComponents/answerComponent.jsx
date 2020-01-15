import React from "react";
import AnswerInputComponent from "./answerInputComponent.jsx";
import AnswerQuestionComponent from "./answerQuestionComponent.jsx";
import TooltipComponent from "../tooltipComponents/tooltipComponent.jsx";

class AnswerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "", valid: false };

        this.validateInput = this.validateInput.bind(this);
        this.submitInput = this.submitInput.bind(this);
    };

    // Updates the current value state to the given input
    // Sets the valid state to true if the given input is greater than 0
    validateInput(input) {
        if (input.length > 0) {
            this.setState({ value: input, valid: true });
        } else {
            this.setState({ value: input, valid: false });
        }
    };

    // Logs the current question and asnwer to the console and resets the input
    // TODO: Upload the question and answer to the firebase database
    submitInput() {
        const valid = this.state.valid;

        if(this.state.valid) {
            console.log(this.state.value)
            this.setState({ value: "", valid: false });
        }
    }
    
    render() {
        const containerClassName = "centered";
        const cardClassName = "answer-card centered";
        const cardReponseClaseName = "answer-card-response";
        const value = this.state.value;
        const valid = this.state.valid;
        const icon = `send`;
        const iconClassName = "submit-send";
        const validClassName = "submit-send-valid";
        const text = "Type some words to answer the question";

        return (
            <div className={containerClassName}>
                <div className={cardClassName}>
                    <AnswerQuestionComponent />

                    <div className={cardReponseClaseName}>
                        <AnswerInputComponent
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
            </div>
        );
    }
}

export default AnswerComponent;
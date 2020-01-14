import React from "react";
import AnswerInputComponent from "./answerInputComponent.jsx";
import AnswerQuestionComponent from "./answerQuestionComponent.jsx";

class AnswerComponent extends React.Component {
    render() {
        const containerClassName = "centered";
        const cardClassName = "answer-card centered";

        return (
            <div className={containerClassName}>
                <div className={cardClassName}>
                    <AnswerQuestionComponent />
                    <AnswerInputComponent />
                </div>
            </div>
        );
    }
}

export default AnswerComponent;
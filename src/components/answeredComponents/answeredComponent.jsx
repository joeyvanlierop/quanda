import React from "react";
import AnswerQuestionComponent from "../answerComponents/answerQuestionComponent.jsx";
import AnsweredResponseComponent from "./answeredResponseComponent.jsx";

class AnsweredComponent extends React.Component {
    render() {
        const containerClassName = "answered-container centered";
        const cardClassName = "answered-card centered";

        return (
            <div className={containerClassName}>
                <div className={cardClassName}>
                    <AnswerQuestionComponent />
                    <AnsweredResponseComponent />
                </div>
            </div>
        );
    }
}

export default AnsweredComponent;
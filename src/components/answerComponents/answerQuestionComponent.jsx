import React from "react";

class AnswerQuestionComponent extends React.Component {
    render() {
        const text = ". . .";
        const className = "answer-question";

        return (
            <p className={className}>
                {text}
            </p>
        );
    }
}

export default AnswerQuestionComponent;
import React from "react";
import TextareaAutosize from 'react-autosize-textarea';

class AnswerInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const placeholder = "Answer the question";
        const className = "answer-input";

        return (
            <TextareaAutosize rows={1} value={this.state.value} className={className} placeholder={placeholder} onChange={this.handleInput} />
        );
    }
}

export default AnswerInputComponent;
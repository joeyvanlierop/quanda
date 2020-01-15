import React from "react";
import TextareaAutosize from 'react-autosize-textarea';

class AskInputComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // Calls the validateInput function
    handleChange(event) {
        this.props.validateInput(event.target.value);
    }

    // Checks if the enter key was pressed without the shift key
    //   - If it was, then it calls the submitInput function and prevents any more input
    handleKeyDown(event) {
        if(event.key == "Enter" && event.shiftKey == false) {
            this.props.submitInput();
            event.preventDefault();
        }
    }

    render() {
        const value = this.props.value;
        const placeholder = "Ask a question";
        const className = "ask-input";

        return (
            <TextareaAutosize
                rows={1}
                value={value}
                className={className}
                placeholder={placeholder}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown} />
        );
    };
}

export default AskInputComponent;
import React from "react";
import TextareaAutosize from 'react-autosize-textarea';

class AskInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.validateInput = this.validateInput.bind(this);
    }
    
    validateInput(event) {
        this.setState({value: event.target.value});
        
        if (event.target.value.slice(-1) === "?") {
            console.log("Valid");
        } else {
            console.log("Invalid");
        }
    }

    render() {
        const placeholder = "Ask a question";
        const className = "ask-input";

        return (
            <TextareaAutosize rows={1} value={this.state.value} className={className} placeholder={placeholder} onChange={this.validateInput} />
        );
    };
}

export default AskInputComponent;
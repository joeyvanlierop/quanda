import React from "react";

class AnsweredResponseComponent extends React.Component {
    render() {
        const className = "answered-response";
        const text = "This is the response to the question"

        return (
            <p className={className}>
                {text}
            </p>
        );
    }
}

export default AnsweredResponseComponent;
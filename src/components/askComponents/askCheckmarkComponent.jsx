import React from "react";

class AskCheckmarkComponent extends React.Component {
    render() {
        const valid = this.props.valid;
        const submitInput = this.props.submitInput;
        const buttonClassName = "submitButton";
        const iconClassName = `material-icons ask-check ${valid ? "valid-ask" : ""}`;

        return (
            <button className={buttonClassName} onClick={submitInput}>
                <i className={iconClassName}>
                    check_circle_outline
                </i>
            </button>
        );
    }
}

export default AskCheckmarkComponent;
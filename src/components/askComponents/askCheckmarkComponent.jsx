import React from "react";

class AskCheckmarkComponent extends React.Component {
    render() {
        const valid = false;
        const className = `material-icons ask-check ${valid ? "valid-ask" : ""}`;

        return (
            <i className={className}>
                check_circle_outline
            </i>
        );
    }
}

export default AskCheckmarkComponent;
import React from "react";
import AskCheckmarkComponent from "./tooltipIconComponent.jsx/index.js.js";
import AskTooltipTextComponent from "./askTooltipTextComponent.jsx";

class AskTooltipComponent extends React.Component {
    render() {
        const submitInput = this.props.submitInput;
        const valid = this.props.valid;
        const className = "tooltip";

        return (
            <div className={className}>
                <AskCheckmarkComponent 
                    submitInput={this.props.submitInput}
                    valid={valid} />

                <AskTooltipTextComponent
                    valid={valid} />
            </div>
        );
    }
}

export default AskTooltipComponent;
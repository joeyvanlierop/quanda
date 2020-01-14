import React from "react";

class AskTooltipTextComponent extends React.Component {
    render() {
        const valid = this.props.valid;
        const text = "Add a question mark to submit";
        const className = "tooltiptext";

        if(valid) {
            return null
        }
        
        return (
            <span className={className}>
                {text}
            </span>
        );
    }
}

export default AskTooltipTextComponent;
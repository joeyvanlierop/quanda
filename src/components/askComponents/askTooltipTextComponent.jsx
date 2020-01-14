import React from "react";

class AskTooltipTextComponent extends React.Component {
    render() {
        const text = "Add a question mark to submit";
        const className = "tooltiptext";

        return (
            <span className={className}>
                {text}
            </span>
        );
    }
}

export default AskTooltipTextComponent;
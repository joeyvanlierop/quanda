import React from "react";
import AskCheckmarkComponent from "./askCheckmarkComponent.jsx";
import AskTooltipTextComponent from "./askTooltipTextComponent.jsx";

class AskTooltipComponent extends React.Component {
    render() {
        const className = "tooltip";

        return (
            <div className={className}>
                <AskCheckmarkComponent />
                <AskTooltipTextComponent />
            </div>
        );
    }
}

export default AskTooltipComponent;
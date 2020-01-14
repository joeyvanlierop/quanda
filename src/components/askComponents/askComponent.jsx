import React from "react";
import AskInputComponent from "./askInputComponent.jsx";
import AskTooltipComponent from "./askTooltipComponent.jsx";

class AskComponent extends React.Component {
    render() {
        const containerClassName = "centered";
        const cardClassName = "ask-card centered";

        return (
            <div className={containerClassName}>
                <div className={cardClassName}>
                    <AskInputComponent />
                    <AskTooltipComponent />
                </div>
            </div>
        );
    }
}

export default AskComponent;
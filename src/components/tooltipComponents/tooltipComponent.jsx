import React from "react";
import TooltipIconComponent from "./tooltipIconComponent.jsx";
import TooltipTextComponent from "./tooltipTextComponent.jsx";

class TooltipComponent extends React.Component {
    render() {
        const onClickCallback = this.props.onClickCallback;
        const valid = this.props.valid;
        const icon = this.props.icon;
        const iconClassName = this.props.iconClassName;
        const validClassName = this.props.validClassName;
        const text = this.props.text;
        const className = "tooltip";

        return (
            <div className={className}>
                <TooltipIconComponent
                    onClickCallback={onClickCallback}
                    valid={valid}
                    icon={icon}
                    iconClassName={iconClassName}
                    validClassName={validClassName} />

                <TooltipTextComponent
                    valid={valid}
                    text={text} />
            </div>
        );
    }
}

export default TooltipComponent;
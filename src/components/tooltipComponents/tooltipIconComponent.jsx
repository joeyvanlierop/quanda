import React from "react";

class TooltipIconComponent extends React.Component {
    render() {
        const onClickCallback = this.props.onClickCallback;
        const valid = this.props.valid;
        const icon = this.props.icon;
        const iconClassName = this.props.iconClassName;
        const validClassName = this.props.validClassName;
        const className = `material-icons ${iconClassName} ${valid ? validClassName : ""}`;

        return (
            <i className={className} onClick={onClickCallback}>
                {icon}
            </i>
        );
    }
}

export default TooltipIconComponent;
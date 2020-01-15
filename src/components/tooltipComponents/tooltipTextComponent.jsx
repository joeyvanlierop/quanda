import React from "react";

class TooltipTextComponent extends React.Component {
    render() {
        const valid = this.props.valid;
        const text = this.props.text;
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

export default TooltipTextComponent;
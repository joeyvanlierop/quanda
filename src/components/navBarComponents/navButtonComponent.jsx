import React from "react";

class NavButtonComponent extends React.Component {
    render() {
        const id = this.props.id;
        const text = this.props.text;
        const selected = this.props.selected;
        const className = selected ? "selected" : "";

        return (
            <button id={id} className={className}>
                <p>{text}</p>
            </button>
        );
    }
}

export default NavButtonComponent;
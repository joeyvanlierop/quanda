import React from "react";

class NavButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const id = this.props.id;
       
        this.props.setSelected(id);
    }

    render() {
        const id = this.props.id;
        const text = this.props.text;
        const selected = this.props.selected;
        const className = selected == id ? "selected" : "";

        return (
            <button id={id} className={className} onClick={this.handleClick} >
                <p>{text}</p>
            </button>
        );
    }
}

export default NavButtonComponent;
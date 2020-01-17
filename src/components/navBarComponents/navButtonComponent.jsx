import React from "react";

class NavButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const index = this.props.index;
        this.props.setIndex(index);
    }

    render() {
        const id = this.props.id;
        const text = this.props.text;
        const index = this.props.index;
        const currentIndex = this.props.currentIndex;
        const className = index == currentIndex ? "selected" : "";

        return (
            <button id={id} className={className} onClick={this.handleClick} >
                <p>{text}</p>
            </button>
        );
    }
}

export default NavButtonComponent;
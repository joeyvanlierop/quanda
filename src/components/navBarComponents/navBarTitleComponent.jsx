import React from "react";

class TitleComponent extends React.Component {
    render() {
        const text = this.props.text;

        return (
            <p>{text}</p>
        );
    }
}

export default TitleComponent;

import React, { Fragment } from "react";
import TitleComponent from "./navBarTitleComponent.jsx";
import NavButtonComponent from "./navButtonComponent.jsx";

class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: "ask" };

        this.setSelected = this.setSelected.bind(this);
    }

    setSelected(id) {
        this.setState({ selected: id });
    }
    
    render() {
        const navButtonProps = [
            { id: "ask", text: "Ask", selected: this.state.selected, setSelected: this.setSelected },
            { id: "answer", text: "Answer", selected: this.state.selected, setSelected: this.setSelected },
            { id: "archive", text: "Archive", selected: this.state.selected, setSelected: this.setSelected },
        ];
        const titleText = "Quanda";
        const wrapperId = "nav-wrapper";
        const leftId = "nav-left";
        const rightId = "nav-right";

        return (
            <nav id={wrapperId}>
                <div id={leftId}>
                    <TitleComponent text={titleText} />
                </div>
                <div id={rightId}>
                    {navButtonProps.map((navButtonProps, index) =>
                        <NavButtonComponent
                            {...navButtonProps}
                            key={index} />
                    )}
                </div>
            </nav>
        );
    }
}

export default NavBarComponent;


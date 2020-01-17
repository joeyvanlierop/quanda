import React, { Fragment } from "react";
import TitleComponent from "./navBarTitleComponent.jsx";
import NavButtonComponent from "./navButtonComponent.jsx";

class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.setIndex = this.setIndex.bind(this);
    }

    setIndex(index) {
        this.props.setIndex(index);
    }

    render() {
        const currentIndex = this.props.currentIndex;
        const setIndex = this.setIndex;
        const navButtonProps = [
            { id: "ask", text: "Ask", index: 0, currentIndex: currentIndex, setIndex: setIndex },
            { id: "answer", text: "Answer", index: 1, currentIndex: currentIndex, setIndex: setIndex },
            { id: "archive", text: "Archive", index: 2, currentIndex: currentIndex, setIndex: setIndex },
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


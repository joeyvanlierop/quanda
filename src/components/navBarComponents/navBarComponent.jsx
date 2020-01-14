import React, { Fragment } from "react";
import TitleComponent from "./navBarTitleComponent.jsx";
import NavButtonComponent from "./navButtonComponent.jsx";

class NavBarComponent extends React.Component {
    render() {
        const navButtonProps = [
            { id: "ask", text: "Ask", selected: true },
            { id: "answer", text: "Answer", selected: false },
            { id: "archive", text: "Archive", selected: false }
        ];
        const titleProps = { text: "Quanda" };
        const wrapperId = "nav-wrapper";
        const leftId = "nav-left";
        const rightId = "nav-right";

        return (
            <nav id={wrapperId}>
                <div id={leftId}>
                    <TitleComponent {...titleProps} />
                </div>
                <div id={rightId}>
                    {navButtonProps.map((navButtonProps, index) =>
                        <NavButtonComponent {...navButtonProps} key={index} />
                    )}
                </div>
            </nav>
        );
    }
}

export default NavBarComponent;


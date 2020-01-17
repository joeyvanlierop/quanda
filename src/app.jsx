import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import NavBarComponent from "./components/navBarComponents/navBarComponent.jsx";
import BodyComponent from "./components/bodyComponent.jsx";

import "./css/normalize.css";
import "./css/stylesheet.css";
import "./css/navbar.css";
import "./css/answer.css";
import "./css/ask.css";

class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentIndex: 0 };
        this.setIndex = this.setIndex.bind(this);
    };

    // Updates the current slide
    setIndex(index) {
        this.setState({ currentIndex: index });
    };

    render() {
        const setIndex = this.setIndex;
        const currentIndex = this.state.currentIndex;

        return (
            <Fragment>
                <NavBarComponent currentIndex={currentIndex} setIndex={setIndex} />
                <BodyComponent currentIndex={currentIndex} />
            </Fragment>
        );
    }
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById("app")
);
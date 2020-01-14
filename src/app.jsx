import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import NavBarComponent from "./components/navBarComponents/navBarComponent.jsx";
import AskComponent from "./components/askComponents/askComponent.jsx";
import AnswerComponent from "./components/answerComponents/answerComponent.jsx";
import AnsweredComponent from "./components/answeredComponents/answeredComponent.jsx";

import "./css/normalize.css";
import "./css/stylesheet.css";
import "./css/navbar.css";
import "./css/answer.css";
import "./css/ask.css";

ReactDOM.render(
    <Fragment>
        <NavBarComponent />
        <AskComponent />
        <AnswerComponent />
        <AnsweredComponent />
    </Fragment>,
    document.getElementById("app")
);
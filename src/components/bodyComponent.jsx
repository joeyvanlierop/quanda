import React from "react";
import Slider from "react-slick";
import AskComponent from "./askComponents/askComponent.jsx";
import AnswerComponent from "./answerComponents/answerComponent.jsx";
import AnsweredComponent from "./answeredComponents/answeredComponent.jsx";

class BodyComponent extends React.Component {
    componentDidUpdate() { 
        const currentIndex = this.props.currentIndex;
        this.slider.slickGoTo(currentIndex);
    }

    render() {
        this.currentIndex = this.props.currentIndex;

        return (
            <Slider ref={slider => (this.slider = slider)}>
                <AskComponent />
                <AnswerComponent />
                <AnsweredComponent />
            </Slider>
        );
    }
}

export default BodyComponent;
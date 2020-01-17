import React from "react";
import Async from 'react-async';
import { getNewestQuestion} from "../../js/databaseHelper.js";

class AnswerQuestionComponent extends React.Component {
    render() {
        const className = "answer-question";

        return (
            <p className={className}>
                <Async promiseFn={getNewestQuestion}>
                    <Async.Loading>
                        { ". . ." }
                    </Async.Loading>

                    <Async.Fulfilled>
                        { data => {
                            if(data) {
                                return data.question; 
                            } else {
                                return "There are no more questions to answer"
                            }
                        }}
                    </Async.Fulfilled>

                    <Async.Rejected>
                        { error => `Something went wrong: ${error.message}` }
                    </Async.Rejected>
                </Async>
            </p>
        );
    }
}

export default AnswerQuestionComponent;
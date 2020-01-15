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
                            console.log(data);
                            return data; 
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
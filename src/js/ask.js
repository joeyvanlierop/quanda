import database from "./database";
import autosize from 'autosize';

// Ask card components
let askInput = document.getElementsByClassName("ask-input")[0];
let askCheck = document.getElementsByClassName("ask-check")[0];


// Uploads an unanswered question to the firebase realtime database
function uploadQuestion(question) {
    let questionObject = {
        question: question,
        date: Date.now(),
    };

    database.ref('unanswered-questions').push().set(questionObject);
}

// Submits a question
// The question must end with a question mark
function submitQuestion(event) {
    if (event.key === "Enter") {
        if (validInput()) {
            console.log(askInput.value);
            uploadQuestion(askInput.value);

            askInput.value = "";
            autosize.update(askInput);
        }

        event.returnValue = false;
    }
}

// Changes the checkmarks color based on the validity of the question input
function validateInput() {
    if (validInput()) {
        askCheck.classList.add("valid-ask");
    } else {
        askCheck.classList.remove("valid-ask");
    }
}

// Returns true if the question input ends with a question mark
function validInput() {
    return askInput.value.slice(-1) === "?";
}


autosize(askInput);
askInput.addEventListener("keyup", validateInput);
askInput.addEventListener("keypress", submitQuestion);

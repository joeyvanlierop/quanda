import autosize, { update } from 'autosize';
import '../css/stylesheet.css';
import '../css/navbar.css';
import '../css/ask.css';
import '../css/answer.css';
import '../css/normalize.css';

// Ask card components
let askInput = document.getElementsByClassName("ask-input")[0];
let askCheck = document.getElementsByClassName("ask-check")[0];
autosize(askInput);

// Answer card components
let answerInput = document.getElementsByClassName("answer-input");
autosize(answerInput);

// Navbar Components
let askButton = document.getElementById("ask");
let answerButton = document.getElementById("answer");
let archiveButton = document.getElementById("archive");
let buttonList = [askButton, answerButton, archiveButton];

function changeSelected(event) {
    buttonList.forEach((button) =>
        button.classList.remove("selected")
    );

    event.currentTarget.classList.add("selected");
}

// Submits a question
// The question must end with a question mark
function submitQuestion(event) {
    if(event.key === "Enter") {
        if(validInput()) {
            console.log(askInput.value);
            askInput.value = "";
            update(askInput);
        }

        event.returnValue = false;
    }
}

function validateInput() {
    if(validInput()) {
        askCheck.classList.add("valid-ask");
    } else {
        askCheck.classList.remove("valid-ask");
    }
}

function validInput() {
    return askInput.value.slice(-1) === "?";
}

buttonList.forEach((button) =>
    button.addEventListener("click", changeSelected)
);

askInput.addEventListener("keyup", validateInput);
askInput.addEventListener("keypress", submitQuestion);
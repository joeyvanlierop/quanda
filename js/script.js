let askInput = document.getElementById("ask-input");
let askCheck = document.getElementById("ask-check");

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

function submitInput(event) {
    if(event.key === "Enter") {
        if(validInput()) {
            console.log(askInput.value);
            askInput.value = "";
        }
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
askInput.addEventListener("keypress", submitInput);
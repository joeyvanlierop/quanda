// Navbar components
let askButton = document.getElementById("ask");
let answerButton = document.getElementById("answer");
let archiveButton = document.getElementById("archive");
let buttonList = [askButton, answerButton, archiveButton];


// Selects the given tab
// Unselects all other tabs
function changeSelected(event) {
    buttonList.forEach((button) =>
        button.classList.remove("selected")
    );

    event.currentTarget.classList.add("selected");
}


// Register each button with the changeSelected function as a callback for a click event
buttonList.forEach((button) =>
    button.addEventListener("click", changeSelected)
);

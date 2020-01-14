import { unansweredDatabase, answeredDatabase } from "./database";
import autosize from 'autosize';


// Returns a random question from the firebase realtime database
function getNewestQuestion() {
    unansweredDatabase.orderByChild("date").limitToFirst(1).once('value').then(snapshot => {
        snapshot.forEach(questionSnapshot => {
            let key = questionSnapshot.key;
            let question = questionSnapshot.val().question;

            if (question != undefined) {
                renewQuestion(key);
                answerQuestion.innerHTML = question;
            } else {
                answerQuestion.innerHTML = "There are no questions to answer :(";
            }
        });
    });
}

// Update the question given key to the current date
function renewQuestion(key) {
    unansweredDatabase.child(key).update({
        date: Date.now()
    });
}

// Removes the given key from the unanswered questions database
function removeQuestion(key) {
    unansweredDatabase.child(key).remove();
}

// Uploads an answered question to the firebase realtime database
function uploadAnswer(questionKey, answer) {
    console.log(question);
    console.log(answer);

    let questionAnswerObject = {
        question: question,
        answer: answer,
        date: Date.now(),
        likes: 0
    }

    answeredDatabase.push().set(questionAnswerObject);
}

// Handles ...
function confirmAnswer(event) {
    if (event.key === "Enter") {
        // console.log(answerQuestion.innerHTML);
        // console.log(answerInput.value);
        uploadAnswer(answerQuestion.innerHTML, answerInput.value);

        answerInput.value = "";
        autosize.update(answerInput);

        event.returnValue = false;
    }
}

getNewestQuestion();
autosize(answerInput);
answerInput.addEventListener("keypress", confirmAnswer);
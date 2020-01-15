import { unansweredDatabase, answeredDatabase } from "./database";

// Returns a random question from the firebase realtime database
function getNewestQuestion() {
    return unansweredDatabase.orderByChild("date").limitToFirst(1).once('value').then(snapshot => {
        let question;
        
        snapshot.forEach(questionSnapshot => {
            let key = questionSnapshot.key;
            let questionText = questionSnapshot.val().question;
            
            if (questionText != undefined) {
                renewQuestion(key);
                question = questionText;
            } else {
                question = "There are no questions to answer :(";
            }
        });

        return question;
    });
}

// Update the question given key to the current date
function renewQuestion(key) {
    unansweredDatabase.child(key).update({
        date: Date.now()
    });
}

// Uploads an unanswered question to the firebase realtime database
function uploadQuestion(question) {
    let questionObject = {
        question: question,
        date: Date.now(),
    };

    unansweredDatabase.push().set(questionObject);
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

// Removes the given key from the unanswered questions database
function removeQuestion(key) {
    unansweredDatabase.child(key).remove();
}

export {
    getNewestQuestion,
    uploadQuestion
}
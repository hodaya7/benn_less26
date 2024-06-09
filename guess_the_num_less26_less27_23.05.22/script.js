//לא גמור כי לא הקליט לו בשיעור 28
//מספר בין אחד ל30 כל פעם שהאתר נטען
function generateRandomNumber() {
    return Math.floor(Math.random() * 29 + 1);
}

let randomNumber = generateRandomNumber();
console.log(randomNumber);

var score = 10;//ניקוד נוכחי
var highScore = 0;

function checkGuess(userGuess) {
    if (userGuess === randomNumber)
        handleScore("correct!");
    //  console.log("correct!");
    else if (userGuess < randomNumber)
        handleScore("your guess is smaller than the random");
    // console.log("your guess is smaller than the random");
    else
        handleScore("your guess is bigger than the random");
    // console.log("your guess is bigger than the random");
}

document.querySelector(".check").addEventListener("click", function () {
    //דברים שיוזר מזין לא נשים בגלובל
    //console.log(document.querySelector(".guess").value);
    //הגיע כמחרוזת
    checkGuess(Number(document.querySelector(".guess").value));
});

function handleScore(resFromChkGuess) {
    switch (resFromChkGuess) {
        case "correct!":
            document.querySelector(".message").textContent = "correct!";
            handleCorrect();
            break;
        case "your guess is smaller than the random":
            if (score > 1)
                document.querySelector(".message").textContent = "your guess is smaller than the random";
            else
                document.querySelector(".message").textContent = "you lost";
            score--;
            document.querySelector(".score").textContent = score;
            break;
        case "your guess is bigger than the random":
            if (score > 1)
                document.querySelector(".message").textContent = "your guess is bigger than the random";
            else
                document.querySelector(".message").textContent = "you lost";
            score--;
            document.querySelector(".score").textContent = score;
            break;
    }
}

function handleCorrect() {
    document.querySelector(".right").classList.add("right-correct");
}
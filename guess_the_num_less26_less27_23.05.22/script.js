//לא גמור 
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
    if(document.querySelector(".guess").value!="")
    //דברים שיוזר מזין לא נשים בגלובל
    //console.log(document.querySelector(".guess").value);
    //הגיע כמחרוזת
    checkGuess(Number(document.querySelector(".guess").value));
    else
    document.querySelector(".message").textContent = "Please enter a number";
});

document.querySelector(".again").addEventListener("click", function () {
    initGame();
});

function initGame() {
    score = 10;
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "You can guess now";
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
    document.querySelector(".right").classList.remove("right-correct");
    reAddCheckButton();
}

function handleScore(resFromChkGuess) {
    switch (resFromChkGuess) {
        case "correct!":
            document.querySelector(".message").textContent = "correct!";
            handleCorrect();
            break;
        case "your guess is smaller than the random":
            if (score > 1) {
                document.querySelector(".message").textContent = "your guess is smaller than the random";
                score--;
                document.querySelector(".score").textContent = score;
            }

            else {
                document.querySelector(".message").textContent = "you lost";
                score--;
                document.querySelector(".score").textContent = score;
                removeCheckButton();
            }
            break;
        case "your guess is bigger than the random":
            if (score > 1) {
                document.querySelector(".message").textContent = "your guess is bigger than the random";
                score--;
                document.querySelector(".score").textContent = score;
            }
            else {
                document.querySelector(".message").textContent = "you lost";
                score--;
                document.querySelector(".score").textContent = score;
                removeCheckButton();
            }
            break;
    }
}

function handleCorrect() {
    document.querySelector(".right").classList.add("right-correct");
    handleHighScore();
    removeCheckButton();
}

//less30
function handleHighScore() {
    if (score > highScore)
        highScore = score;
    document.querySelector(".highscore").textContent = highScore;
}

function removeCheckButton() {
    document.querySelector(".check").classList.add("not-display-element");
}

function reAddCheckButton() {
    document.querySelector(".check").classList.remove("not-display-element");
}
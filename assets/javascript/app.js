$(document).ready(function () {

    // Questions array
    var questions = [
        {
            question: "What day comes after Sunday?",
            answers: [
                "Tuesday",
                "Saturday",
                "Friday",
                "Monday"
            ],
            correctAnswer: "3",
            explanation: "The days of the week in order are: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"

        },
        {
            question: "How many days in a week?",
            answers: [
                "5",
                "3",
                "6",
                "7"
            ],
            correctAnswer: "3",
            explanation: "There are 7 days in the week. They are: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"
        },
        {
            question: "How many months are there in a year?",
            answers: [
                "4",
                "10",
                "12",
                "20"
            ],
            correctAnswer: "2",
            explanation: "There are 12 months in a year.  They are January, February, March, April, May, June, July, August, September, October, November, and December."
        }
        ,
        {
            question: "What town do we live in?",
            answers: [
                "California",
                "The United States",
                "Ladera Ranch",
                "Raleigh"
            ],
            correctAnswer: "2",
            explanation: "We live in the town of Ladera Ranch.  California is our State, and The United States is our Country"
        }
    ]
    let currentQuestionNum = 0;
    var timePerQuestion = 10;
    $("#gameTimer").hide();
    var time = timePerQuestion;
    var timeRemaining;
    var timeBeforeNextQuestion;
    var firstQuestion = true;

    const startQuestion = function () {
        //Write question and answers to page
        $("#gameMain").empty();
        var currentQuestion = questions[currentQuestionNum].question
        $("#gameMain").append("<h1> " + currentQuestion + "</h1>");
        //clear show answer
        clearInterval(timeBeforeNextQuestion);
        // Timer Counting Down
        $("#secondsLeft").text(time);
        time = timePerQuestion;
        timeRemaining = setTimeout(outOfTime, timePerQuestion*1000);
        if (firstQuestion) {
            intervalId = setInterval(count, 1000);
        }
        firstQuestion = false;
        


        //Loop through answers and write them to page
        questions[currentQuestionNum].answers.forEach(function (answer, i) {
            //$("#gameMain").append("<p> " + answer + "</p>");
            var newAnswer = $("<h2 class = answer value = " + i + ">" + answer + "</h2>").on("click", function () {
                // Answer Clicked
                stopTimer();

                //get their answer
                theirAnswerNumber = $(this).attr("value");
                var theAnswer = questions[currentQuestionNum].correctAnswer;
                
                // If correct
                if (theirAnswerNumber === theAnswer) {
                    $("#gameMain").empty();
                    $("#gameMain").append("<h1>That is correct!</h1>");
                }
                
                // If wrong
                else {
                    $("#gameMain").empty();
                    $("#gameMain").append("<h1>That is not correct.</h1>");
                    $("#gameMain").append("<h1>The correct answer is:  " + questions[currentQuestionNum].answers[questions[currentQuestionNum].correctAnswer] + "</h1>");
                    $("#gameMain").append("<h1>" + questions[currentQuestionNum].explanation + "</h1>");
                }
                
                //Show next Question button
                var nextQuestionButton = $("<button id = 'nextQuestionButton'>Next Question</button>").click(function () {
                    stopTimer();
                    nextQuestion();
                })
                $("#gameMain").append(nextQuestionButton);


            });
            $("#gameMain").append(newAnswer);
            //$("#gameMain").append("<p class = answer value = " + i + ">" + answer + "</p>");
        });
        $("#gameTimer").show();
    };

    $("#startGame").click(function () {
        startQuestion();
    });

    var nextQuestion = function () {
        stopTimer();
        currentQuestionNum++;
        time = timePerQuestion;
        if (currentQuestionNum < questions.length) {
            startQuestion();
        }
        else {
            console.log("GAME OVER!")
        }
    }
    var outOfTime = function () {
        stopTimer();
        $("#gameMain").empty();
        $("#gameMain").append("<h1>You are out of time!</h1>");
        $("#gameMain").append("<h1>The correct answer is:  " + questions[currentQuestionNum].answers[questions[currentQuestionNum].correctAnswer] + "</h1>");
        $("#gameMain").append("<h1>" + questions[currentQuestionNum].explanation + "</h1>");
        timeBeforeNextQuestion = setTimeout(nextQuestion, timePerQuestion*1000)

    }

    function count() {
        time--;
        $("#secondsLeft").text(time);
    }
    function stopTimer() {
        clearInterval(timeRemaining);
        clockRunning = false;
        $("#gameTimer").hide();

    }

});


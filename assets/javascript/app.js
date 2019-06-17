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
        }

    ]
    let currentQuestionNum = 1;
    $("#gameTimer").hide();

    //==============================================================================================================================
    //========================If I take the code below out of the function and run it on page load then the .click below it works===
    //========================If I leave this in the function then the .click below does nothing====================================
    //==============================================================================================================================
    const startQuestion = function () {
        //Write question and answers to page
        $("#gameMain").empty();
        var currentQuestion = questions[currentQuestionNum].question
        $("#gameMain").append("<h2> " + currentQuestion + "</h2>");
        //Loop through answers and write them to page
        questions[currentQuestionNum].answers.forEach(function (answer, i) {
            //$("#gameMain").append("<p> " + answer + "</p>");
            $("#gameMain").append("<p class = answer value = " + i + ">" + answer + "</p>");
        });
        $("#gameTimer").show();
    };

    //===========================================================================================================
    //=============This only works if .answer was created outside of a function ===============================
    //=============As it is now nothing happens                                  ===============================
    //====================================================================================================================
    $(".answer").click(function () {
        console.log("answer clicked")
        //get their answer
        //theirAnswer = questions[0].answers[$(this).attr("value")];
        //console.log(theirAnswer);
        theirAnswerNumber = $(this).attr("value");
        var theAnswer = questions[currentQuestionNum].correctAnswer;
        if (theirAnswerNumber === theAnswer) {
            $("#gameMain").empty();
            $("#gameMain").append("<h1>That is correct!</h1>");
        }
        else {
            $("#gameMain").empty();
            $("#gameMain").append("<h1>That is not correct.</h1>");
            $("#gameMain").append("<h1>The correct answer is:  " + questions[currentQuestionNum].answers[questions[currentQuestionNum].correctAnswer] + "</h1>");
            $("#gameMain").append("<h1>" + questions[currentQuestionNum].explanation + "</h1>");
            //console.log("That is not correct. The answer is: " + questions[0].answers[questions[0].correctAnswer] + ". " + questions[0].explanation)
        }
        //$("#gameMain").append("<button id = 'nextQuestionButton'>Next Question</button>");


    });
    $("#nextQuestionButton").click(function () {
        console.log("next question pressed");
    });
    $("#startGame").click(function () {
        startQuestion();
    });


    // .ready ending
});


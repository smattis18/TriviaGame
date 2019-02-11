// Array of objects
var questionsAndAnswers = [
{question: "Who plays Dana Scully on The X-Files?", option1: "Marsha Hollinsworth", option2: "Melissa Duchovny", option3: "Janet Christensen", option4: "Gillian Anderson", answer: "Gillian Anderson"},
{question: "In the movie Logan's Run, people are only allowed to live to age?", option1: "18", option2: "21", option3: "25", option4: "30", answer: "30"},
{question: "What is the name of the computer that kills much of the crew in 2001: A Space Odyssey?", option1: "HAL", option2: "DAN", option3: "GYE", option4: "BOB", answer: "HAL"},
{question: "'Danger Will Robinson' is from?", option1: "Star Wars", option2: "Star Trek", option3: "Lost in Space", option4: "The Nomad", answer: "Lost in Space"},
{question: "In the movie Close Encounters of the Third Kind, what did a man build a model of out of mashed potatoes?", option1: "A laser gun", option2: "A space ship", option3: "A mountain", option4: "An alien being", answer: "A mountain"},
{question: "The book Dune was written by?", option1: "Frank Herbert", option2: "Isaac Asimov", option3: "Piers Anthony", option4: "George Lucas", answer: "Frank Herbert"},
{question: "What do you see at the end of the movie Planet of the Apes?", option1: "The remains of the Statue of Liberty", option2: "The remains of the Empire State Building", option3: "An Angel", option4: "A space craft", answer: "The remains of the Statue of Liberty"},
{question: "Who wrote & directed the horrible yet entertaining movie Plan 9 From Outer Space?", option1: "Steven Spielberg", option2: "Roland Emmerich", option3: "George Lucas", option4: "Ed Wood", answer: "Ed Wood"},
{question: "Who was the Highlander in the movie by that name?", option1: "Sean Connery", option2: "Christopher Lambert", option3: "Tim Thomerson", option4: "Adrian Paul", answer: "Christopher Lambert"},
{question: "In which century does Star Trek The Original Series take place?", option1: "18th", option2: "23rd", option3: "21st", option4: "31st", answer: "23rd"}
];

$("#start-game").on("click", function () {
    event.preventDefault();

    clearScreen();

    var timer = $("<div>").attr("id", "timer");
    $(".main-display").append(timer);

    var j = 0;

    for (var i = 0; i < 10; i++) {
    j++;
    var newQuestion = $("<div>").append(
        $("<p>").addClass("questions").text(questionsAndAnswers[i].question),
        $("<input type='radio'>").attr("name", "question-" + j).attr("id", "q" + j + "o1").attr("value", questionsAndAnswers[i].option1),
        $("<label>").addClass("answers").text(questionsAndAnswers[i].option1).css("padding-right", "15px"),
        $("<input type='radio'>").attr("name", "question-" + j).attr("id", "q" + j + "o2").attr("value", questionsAndAnswers[i].option2),
        $("<label>").addClass("answers").text(questionsAndAnswers[i].option2).css("padding-right", "15px"),
        $("<input type='radio'>").attr("name", "question-" + j).attr("id", "q" + j + "o3").attr("value", questionsAndAnswers[i].option3),
        $("<label>").addClass("answers").text(questionsAndAnswers[i].option3).css("padding-right", "15px"),
        $("<input type='radio'>").attr("name", "question-" + j).attr("id", "q" + j + "o4").attr("value", questionsAndAnswers[i].option4),
        $("<label>").addClass("answers").text(questionsAndAnswers[i].option4).css("padding-right", "15px"));
    $(".main-display").append(newQuestion);
    };

    $(".main-display").append($("<button>").addClass("btn btn-lg btn-dark").attr("id", "finish-game").text("Done").on("click", function() {gameResults(interval);}));

    var seconds_left = 30;
    var interval = setInterval(function() {
        document.getElementById('timer').innerHTML = "Time Until Takeoff: " + --seconds_left + " Seconds";
    
        if (seconds_left <= 0)
        {
            gameResults(interval);
        }
    }, 1000);

});

function gameResults(interval) {
    var correctAnswers = 0;
    var incorrectAnswers = 0;

    var answer1 = $("input[type='radio'][name='question-1']:checked").val();
    if (answer1 === questionsAndAnswers[0].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer2 = $("input[type='radio'][name='question-2']:checked").val();
    if (answer2 === questionsAndAnswers[1].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer3 = $("input[type='radio'][name='question-3']:checked").val();
    if (answer3 === questionsAndAnswers[2].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer4 = $("input[type='radio'][name='question-4']:checked").val();
    if (answer4 === questionsAndAnswers[3].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer5 = $("input[type='radio'][name='question-5']:checked").val();
    if (answer5 === questionsAndAnswers[4].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer6 = $("input[type='radio'][name='question-6']:checked").val();
    if (answer6 === questionsAndAnswers[5].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer7 = $("input[type='radio'][name='question-7']:checked").val();
    if (answer7 === questionsAndAnswers[6].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer8 = $("input[type='radio'][name='question-8']:checked").val();
    if (answer8 === questionsAndAnswers[7].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer9 = $("input[type='radio'][name='question-9']:checked").val();
    if (answer9 === questionsAndAnswers[8].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    var answer10 = $("input[type='radio'][name='question-10']:checked").val();
    if (answer10 === questionsAndAnswers[9].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    clearScreen();
    clearInterval(interval);

    $(".card-title").css("color", "#000000").css("text-shadow", "0 0 8px #33C1FF");

    displayResults(correctAnswers, incorrectAnswers);
};

function clearScreen() {
    $(".main-display").empty();
};

function displayResults(correct, incorrect) {
    var results = $("<div>").append(
        $("<h1>").attr("id", "title").text("Mission Report:"),
        $("<h3>").addClass("results").text("Correct Answers: " + correct),
        $("<h3>").addClass("results").attr("id", "incorrect").text("Incorrect Answers: " + incorrect)
    );
    $(".main-display").append(results);
}
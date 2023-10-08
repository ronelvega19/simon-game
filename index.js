

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];
var level = 0;
var start = false;

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  
});

$(document).keydown(function () { 
  var timeLeft = 4;
    var timeReady = setInterval(function (){
      timeLeft--;
      $("h1").text(timeLeft);
      if(timeLeft<=1)
        clearInterval(timeReady);
      },1000);
      
  if(!start){
   setTimeout(() => {
    $("#level-title").text("Level "+ level);
    nextSequence();
    start = true;
   }, 4000);
  }
});

function nextSequence() {
  level++;
   
  userClickedPattern = [];
  
  $("#level-title").text("Level "+ level);
  var randomNum = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNum];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
    playSound(randomChosenColor);
}



function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}


function animatePress(currentColor){

  $("#"+currentColor).on("click", function(){
    $("#"+currentColor).addClass("pressed");
    setTimeout(() => {
      $("#"+currentColor).removeClass("pressed");
    }, 100);
  });
}

function checkAnswer(currentLevel){

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");

    if(userClickedPattern.length === gamePattern.length){
     setTimeout(() => {
      nextSequence();
     }, 1000);
   
     }
  }

  else{
    console.log("Wrong");

  $("body").addClass("game-over");

  setTimeout(() => {
    playSound("wrong");
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, you reach level " + level + " Press any key to restart.");
 
  startOver();
 }
}

function startOver(){
level = 0;
gamePattern = [];
start = false;




}


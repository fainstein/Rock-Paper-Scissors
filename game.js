var hand;
var handsArray = ["rock", "paper", "scissors"];
var randomHand;
var scoreCounter = 0;

// THREE BUTTONS

$("#rock").click(function() {
  hand = "rock";
  handSelected(".you-picked", hand);
  nextLevel();
  setTimeout(function() {
    winnerSelector();
  }, 2000);
})

$("#paper").click(function() {
  hand = "paper";
  handSelected(".you-picked", hand);
  nextLevel();
  setTimeout(function() {
    winnerSelector();
  }, 2000);
})

$("#scissors").click(function() {
  hand = "scissors";
  handSelected(".you-picked", hand);
  nextLevel();
  setTimeout(function() {
    winnerSelector();
  }, 2000);
})


function nextLevel() {
  $(".game-section").toggleClass("hide");
  $(".match-container").toggleClass("hide");
  randomHand = handsArray[Math.floor(Math.random() * 3)];

  setTimeout(function() {
    handSelected(".house-picked", randomHand);
    $(".house-picked .hand-box").toggleClass("hide");
  }, 1000);

  setTimeout(function() {
    $(".winner-box").toggleClass("hide");
  }, 2000);
}

function handSelected(container, handBox) {
  $(container + " .hand-box").addClass(handBox + "-box");
  $(container + " .circle").addClass(handBox + "-fill");
  $(container + " .border").addClass(handBox + "-border");
}

//GAME ON
var whoWins; // 0: USER, 1: COMPUTER, 2: TIE //
function winnerSelector() {
  if (hand == "rock") {
    switch (randomHand) {
      case "rock":
        whoWins = 2;
        break;
      case "paper":
        whoWins = 1;
        break;
      case "scissors":
        whoWins = 0;
        break;
      default:
    }
  } else if (hand == "paper") {
    switch (randomHand) {
      case "rock":
        whoWins = 0;
        break;
      case "paper":
        whoWins = 2;
        break;
      case "scissors":
        whoWins = 1;
        break;
      default:
    }
  } else {
    switch (randomHand) {
      case "rock":
        whoWins = 1;
        break;
      case "paper":
        whoWins = 0;
        break;
      case "scissors":
        whoWins = 2;
        break;
      default:
    }
  }

  if (whoWins == 0) {
    $(".winner-box h1").text("YOU WIN")
    scoreCounter += 1;
  } else if (whoWins == 1) {
    $(".winner-box h1").text("YOU LOSE")
    scoreCounter = 0;
  } else {
    $(".winner-box h1").text("IT'S A TIE")
  }
  $(".score-number").text(scoreCounter);
}

//PLAY AGAIN

$(".play-again").click(function() {
  $(".match-container").toggleClass("hide");
  $(".game-section").toggleClass("hide");
  $(".house-picked .hand-box").toggleClass("hide");
  $(".winner-box").toggleClass("hide");
  emptyHands(".you-picked", hand);
  emptyHands(".house-picked", randomHand);
})

function emptyHands(container, handBox) {
  $(container + " .hand-box").removeClass(handBox + "-box");
  $(container + " .circle").removeClass(handBox + "-fill");
  $(container + " .border").removeClass(handBox + "-border");
}

// RULES POP UP
$(".rules").click(rulesToggler);
$(".close-icon").click(rulesToggler);

function rulesToggler() {
  $(".popup").toggleClass("hide");
}

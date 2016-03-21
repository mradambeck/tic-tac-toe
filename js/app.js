// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("sanity check! Javascript is running.");

  //establish board
  var boardArray = [[null,null,null],
                    [null,null,null],
                    [null,null,null]];
  var playerTurn = 'X';
  var turnsPlayed = 0;
  var winner = null;
  var lastPlayed = null;
  var gameOver = false;
  var xScore = 0;
  var oScore = 0;


  function showBoardArray(){
    console.log(boardArray);
  }

  function animateWin(cells){
    $(cells).animate({fontSize: '11.5em'}, 100);
    $(cells).animate({fontSize: '11em'}, 200);
  }

  function logWinner(){
    winner = lastPlayed;
    console.log(winner + " wins!");
    $("#mainTitle").text(winner + " WINS!");

    // if (winner === 'X'){
    //   $(".x").animate({fontSize: '11.5em'}, 100);
    //   $(".x").animate({fontSize: '11em'}, 200);
    // } else if (winner === 'O'){
    //   $(".o").animate({fontSize: '11.5em'}, 100);
    //   $(".o").animate({fontSize: '11em'}, 200);
    // }

    logScore(winner);
    // Easter egg
    if (xScore === 4 && oScore === 0){
      $("#mainTitle").text("X is kicking ass!");
    } else if (xScore === 0 && oScore === 4) {
      $("#mainTitle").text("O rules!");
    }

    gameOver = true;
  }

  function logScore(xOrO){
    if (xOrO === "X"){
      xScore++;
    } else if (xOrO === "O"){
      oScore++;
    }
    console.log("X: " + xScore + "; O: " + oScore);
    $("#x-score").text(xScore);
    $("#o-score").text(oScore);
  }

// Game reset
  $(".btn-danger").on("click", function resetGame(){
    boardArray = [[null,null,null],
                  [null,null,null],
                  [null,null,null]];
    playerTurn = 'X';
    turnsPlayed = 0;
    if (winner) {
      $("#mainTitle").text(winner + " won the last round.");
    } else {
      $("#mainTitle").text("tic.tac.toe");
    }
    winner = null;
    gameOver = false;
    $(".box").text("");
    $('.x').removeClass("x");
    $('.o').removeClass("o");
    $("body").removeClass("cats-game");
    showBoardArray();
    console.log("playerTurn: " + playerTurn + " turnsPlayed: " + turnsPlayed + " Winner: " + winner);
  });

  $(".box").on("click", function gamePlay(event){
    // Grabs css ID, converts to integer, logs to boardArray
    if (!gameOver){
      var cellID = $(this).attr('id');
        console.log("cell ID is: " + cellID);

      for (var i=0; i<cellID.length; i++) {
        cellIDArray = cellID.split("");
        cellIDArray[i] = parseInt(cellIDArray[i], 10);
      }
      if ( boardArray[cellIDArray[0]][cellIDArray[1]] === null) { // Checks to see if a move has been made in that cell.
        // handles CSS to visualize gameplay
        if(playerTurn === 'X'){
          $(this).text("X");
          boardArray[cellIDArray[0]][cellIDArray[1]] = playerTurn; // Logs it into the array, like a boss!  Woot, woot!
          playerTurn = 'O'; // switches to next player
          lastPlayed = 'X'; // allows us to keep track of last player (to mark the winner)
          $(this).addClass("x"); // changes bg color
          turnsPlayed++;
        } else {
          $(this).text("O");
          boardArray[cellIDArray[0]][cellIDArray[1]] = playerTurn;
          playerTurn = 'X';
          lastPlayed = 'O';
          $(this).addClass("o");
          turnsPlayed++;
        }

        // determines winner - could be more DRY but wasn't sure how to accomplish
        if (((boardArray[0][0]==='X')&&(boardArray[0][1]==='X')&&(boardArray[0][2]==='X')) ||
          ((boardArray[0][0]==='O')&&(boardArray[0][1]==='O')&&(boardArray[0][2]==='O'))) {
            animateWin("#00, #01, #02");
            logWinner();
        } else if (((boardArray[1][0]==='X')&&(boardArray[1][1]==='X')&&(boardArray[1][2]==='X')) ||
          ((boardArray[1][0]==='O')&&(boardArray[1][1]==='O')&&(boardArray[1][2]==='O'))){
            animateWin("#10, #11, #12");
            logWinner();
        } else if (((boardArray[2][0]==='X')&&(boardArray[2][1]==='X')&&(boardArray[2][2]==='X')) ||
          ((boardArray[2][0]==='O')&&(boardArray[2][1]==='O')&&(boardArray[2][2]==='O'))){
            animateWin("#20, #21, #22");
            logWinner();
        } else if (((boardArray[0][0]==='X')&&(boardArray[1][0]==='X')&&(boardArray[2][0]==='X')) ||
          ((boardArray[0][0]==='O')&&(boardArray[1][0]==='O')&&(boardArray[2][0]==='O'))){
            animateWin("#00, #10, #20");
            logWinner();
        } else if (((boardArray[0][1]==='X')&&(boardArray[1][1]==='X')&&(boardArray[2][1]==='X')) ||
          ((boardArray[0][1]==='O')&&(boardArray[1][1]==='O')&&(boardArray[2][1]==='O'))){
            animateWin("#01, #11, #21");
            logWinner();
        } else if (((boardArray[0][2]==='X')&&(boardArray[1][2]==='X')&&(boardArray[2][2]==='X')) ||
          ((boardArray[0][2]==='O')&&(boardArray[1][2]==='O')&&(boardArray[2][2]==='O'))){
            animateWin("#02, #12, #22");
            logWinner();
        } else if (((boardArray[0][2]==='X')&&(boardArray[1][2]==='X')&&(boardArray[2][2]==='X')) ||
          ((boardArray[0][2]==='O')&&(boardArray[1][2]==='O')&&(boardArray[2][2]==='O'))){
            animateWin("#02, #12, #22");
            logWinner();
        } else if (((boardArray[0][0]==='X')&&(boardArray[1][1]==='X')&&(boardArray[2][2]==='X')) ||
          ((boardArray[0][0]==='O')&&(boardArray[1][1]==='O')&&(boardArray[2][2]==='O'))){
            animateWin("#00, #11, #22");
            logWinner();
        } else if (((boardArray[0][2]==='X')&&(boardArray[1][1]==='X')&&(boardArray[2][0]==='X')) ||
          ((boardArray[0][2]==='O')&&(boardArray[1][1]==='O')&&(boardArray[2][0]==='O'))){
            animateWin("#02, #11, #20");
            logWinner();
        } else if ((turnsPlayed === 9)&& !winner){
            console.log("Cat's Game!");
            $("#mainTitle").text("Cat's Game!");
            $('body').addClass("cats-game");
            gameOver = true;
        }
      } else {
        console.log("Player " + playerTurn + " tried playing on " + boardArray[cellIDArray[0]][cellIDArray[1]] + " but it was already taken.");
      }
    }
    // Logs boardArray for debugging
    showBoardArray();
  });


});

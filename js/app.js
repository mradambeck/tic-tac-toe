// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("sanity check! Javascript is running.");
  // all code to manipulate the DOM
  // goes inside this function
  var x = true;
  var turnsPlayed = 0;
  $(".box").on("click", function handleClick(event){
    if(x){
      $(this).text("X");
        console.log("X took a turn");
      x = false;
        console.log("X was set to false");
      // $(this).css( "background-color", '#e63946');
      $(this).addClass("x");
        console.log(".x added as class");
      turnsPlayed++;
        console.log(turnsPlayed);
    } else {
      $(this).text("O");
        console.log("O took a turn");
      x= true;
        console.log("X was set to true");
      $(this).addClass("o");
        console.log(".o added as class");
      turnsPlayed++;
        console.log(turnsPlayed);
    }
    if (turnsPlayed === 9){
      $("#mainTitle").text("CAT'S GAME!");
        console.log("CAT'S GAME!");
    }
  });
});

// if ($(this).hasClass('x' || 'o')) {
// DON'T LET THEM MAKE A MARK
// }

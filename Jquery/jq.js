var gamer1 = prompt("Player one enter your name, you will be Blue")
var gamer2 = prompt("Player Two enter your name, you will be Red")
var circ = $td.click().this
$('td').click(function(){turn(this)})
//$('.tab').click(function(){$('h3').text("Player two turn")})
function turn(this) {
  var x = document.getElementById("turn");
  if (x.innerHTML === "Let's Play") {
    x.innerHTML = gamer1 + " turn now";
    $(this).css('background', 'red');
  }
   else if (x.innerHTML === gamer1 + " turn now") {
    x.innerHTML = gamer2 + " turn now";
    $(this).css('background', 'blue');
}
  else {x.innerHTML = gamer1 + " turn now";
  $(this).css('background', 'red')};
}
//$('td').click(function(){$(this).css('background', 'red')})

//  $(thi).css('background', 'blue');})
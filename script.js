var player = "X";
var winner = "";
function draw (id){
  if (player = "X"){
    document.getElementById(id).innerHTML = "X";
    player = "O";
  }else {
    document.getElementById(id).innerHTML = "O";
    player = "X";
  }
}
if (document.getElementById("cell1").innerHTML == document.getElementById("cell5").innerHTML && document.getElementById("cell1").innerHTML == document.getElementById("cell9").innerHTML) {
   winner = document.getElementById("cell1").innerHTML;
   document.getElementById("cell1").innerHTML = winner.concat(" Wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell3").innerHTML == document.getElementById("cell5").innerHTML && document.getElementById("cell3").innerHTML == document.getElementById("cell7").innerHTML) {
   winner = document.getElementById("cell3").innerHTML;
   document.getElementById("cell3").innerHTML = winner.concat(" Wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell1").innerHTML == document.getElementById("cell4").innerHTML && document.getElementById("cell1").innerHTML == document.getElementById("cell7").innerHTML) {
   winner = document.getElementById("cell1").innerHTML;
   document.getElementById("cell1").innerHTML = winner.concat(" Wins!!!");
   document.getElementById("#grid").visibility = "hidden";         
}else if(document.getElementById("cell3").innerHTML == document.getElementById("cell6").innerHTML && document.getElementById("cell3").innerHTML == document.getElementById("cell9").innerHTML){
   winner = document.getElementById("cell3").innerHTML;
   document.getElementById("cell3").innerHTML = winner.concat(" Wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell2").innerHTML == document.getElementById("cell5").innerHTML && document.getElementById("cell2").innerHTML == document.getElementById("cell8").innerHTML){
   winner = document.getElementById("cell2").innerHTML;
   document.getElementById("cell2").innerHTML = winner.concat(" Wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell1").innerHTML == document.getElementById("cell2").innerHTML && document.getElementById("cell1").innerHTML == document.getElementById("cell3").innerHTML){
   winner = document.getElementById("cell1").innerHTML;
   document.getElementById("cell1").innerHTML = winner.concat(" Wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell4").innerHTML == document.getElementById("cell5").innerHTML && document.getElementById("cell4").innerHTML == document.getElementById("cell6").innerHTML){
   winner = document.getElementById("cell4").innerHTML;
   document.getElementById("cell4").innerHTML = winner.concat(" Wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell7").innerHTML == document.getElementById("cell8").innerHTML && document.getElementById("cell7").innerHTML == document.getElementById("cell9").innerHTML){
   winner = document.getElementById("cell7").innerHTML;
   document.getElementById("cell7").innerHTML = winner.concat(" Wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}

var player = "x";
var winner = null;
function draw (id){
  if (player = "x"){
    document.getElementById(id).innerHTML = "X";
    player = "O";
  }else {
    document.getElementById(id).innerHTML = "O";
    player = "x";
  }
}
if (document.getElementById("cell1").innerHTML == document.getElementById("cell5").innerHTML && document.getElementById("cell1").innerHTML == document.getElementById("cell9").innerHTML) {
   winner = document.getElementById().innerHTML;
   document.getElementById().innerHTML = winner.concat(" wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell3").innerHTML == document.getElementById("cell5").innerHTML && document.getElementById("cell3").innerHTML == document.getElementById("cell7").innerHTML) {
   winner = document.getElementById().innerHTML;
   document.getElementById().innerHTML = winner.concat(" wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell1").innerHTML == document.getElementById("cell4").innerHTML && document.getElementById("cell1").innerHTML == document.getElementById("cell7").innerHTML) {
   winner = document.getElementById().innerHTML;
   document.getElementById().innerHTML = winner.concat(" wins!!!");
   document.getElementById("#grid").visibility = "hidden";         
}else if(document.getElementById("cell3").innerHTML == document.getElementById("cell6").innerHTML && document.getElementById("cell3").innerHTML == document.getElementById("cell9").innerHTML){
   winner = document.getElementById().innerHTML;
   document.getElementById().innerHTML = winner.concat(" wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell2").innerHTML == document.getElementById("cell5").innerHTML && document.getElementById("cell2").innerHTML == document.getElementById("cell8").innerHTML){
   winner = document.getElementById().innerHTML;
   document.getElementById().innerHTML = winner.concat(" wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell1").innerHTML == document.getElementById("cell2").innerHTML && document.getElementById("cell1").innerHTML == document.getElementById("cell3").innerHTML){
   winner = document.getElementById().innerHTML;
   document.getElementById().innerHTML = winner.concat(" wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell4").innerHTML == document.getElementById("cell5").innerHTML && document.getElementById("cell4").innerHTML == document.getElementById("cell6").innerHTML){
   winner = document.getElementById().innerHTML;
   document.getElementById().innerHTML = winner.concat(" wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}else if(document.getElementById("cell7").innerHTML == document.getElementById("cell8").innerHTML && document.getElementById("cell7").innerHTML == document.getElementById("cell9").innerHTML){
   winner = document.getElementById().innerHTML;
   document.getElementById().innerHTML = winner.concat(" wins!!!");
   document.getElementById("#grid").visibility = "hidden";
}

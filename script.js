document.getElementById("hidel").style.display='none';
var result='';


var banana=0;
function bananaplus(){ banana++;  document.getElementById("bananacount").textContent=banana; }
function bananaminus(){if(banana>0){ banana--; document.getElementById("bananacount").textContent=banana;}}

var pure=0;
function pureplus(){ pure++;  document.getElementById("purecount").textContent=pure; }
function pureminus(){if(pure>0){ pure--; document.getElementById("purecount").textContent=pure;}}

var chop=0;
function chopplus(){ chop++;  document.getElementById("chopcount").textContent=chop; }
function chopminus(){if(chop>0){ chop--; document.getElementById("chopcount").textContent=chop;}}

var tea=0;
function teaplus(){ tea++;  document.getElementById("teacount").textContent=tea; }
function teaminus(){if(tea>0){ tea--; document.getElementById("teacount").textContent=tea;}}


function htmlEncode (value){
 
  return ;
}
$(function() {
  $("#generate").click(function() {
    document.getElementById("hideldiv").style.display='none';
    if(banana>0){for(let i = banana; i > 0; i--)result+="01"}
    if(pure>0){for(let i = pure; i > 0; i--)result+="02"}
    if(chop>0){for(let i = pure; i > 0; i--)result+="03"}
    if(tea>0){for(let i = pure; i > 0; i--)result+="04"}
    document.getElementById("hidel").style.display='block';
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + result + "&chs=160x160&chld=L|0");
  });
});
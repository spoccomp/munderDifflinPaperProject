// function playPaperCrinkle() {
//     document.getElementById('audiotag').play();
// }
// //document.getElementById("audiotag").onload = function() {playPaperCrinkle()};
// function playVid() { 
//     document.getElementById("myVideo").play(); 
// } 

//let checkIt = document.querySelectorAll("copyImg");
//checkIt.addEventListener("mouseover",function(event){funnyFunction()});
function funnyFunction(event){ 
    event.style.height = "400px";
    event.style.width = "400px";
}
function backToNormal(event){
    event.style.height = "200px";
    event.style.width = "200px";
}
//document.querySelector("pFun").addEventListener("mouseover",makeItFunny);
//document.querySelector("pFun").addEventListener("mouseout",makeItNormal);
//let funny = document.querySelector("pFun");
function makeItFunny(event){
    event.style.color = "red";
    //event.funny.style.color = "red";
    //event.funny.style.fontWeight ="bold";
    //document.querySelector("pFun").style.color = "red";
}
function makeItNormal(event){
    event.style.color = "black";
}
function seeTeam(){
    document.getElementById("hidden").style.display = 'block';
    document.getElementById("hidden").style.visibility = "visible";
}
function hiddenTeam(){
    document.getElementById("hidden").style.display = 'block';
    document.getElementById("hidden").style.visibility = "hidden";
}
function watchUTube(){
    //opens a new tab and plays video
    window.open("https://youtu.be/aawxhGuYr2M");
}
function funnyImage(event){
    event.style.height = "200px";
    event.style.width = "200px";
}
function normImage(event){
    event.style.height = "50px";
    event.style.width = "50px";
}




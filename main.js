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
    //document.getElementById("hidden").style.display = 'block';
    document.getElementById("hidden").style.visibility = "visible";
    document.getElementById("hidden").style.marginLeft = "15%";
    document.getElementById("hidden").style.height = "400px";
    document.getElementById("hidden").style.width = "900px";
    document.getElementById("hidden").style.marginTop = "4%";
    document.getElementById("hidden").style.borderBottomLeftRadius = "5px";
    document.getElementById("hidden").style.borderBottomRightRadius = "5px";
    document.getElementById("hidden").style.borderTopLeftRadius = "5px";
    document.getElementById("hidden").style.webkitBorderTopRightRadius = "5px";
}
function hiddenTeam(){
    document.getElementById("hidden").style.visibility = "hidden";
}
function watchUTube(){
    //opens a new tab and plays video
    window.open("https://youtu.be/aawxhGuYr2M");
}
function funnyImage(event){//this is blown up
    event.style.height = "150px";
    event.style.width = "150px";
    //textBlowUp();    
}
function normImage(event){//this is normal
    event.style.height = "50px";
    event.style.width = "50px";
    //textNormal();
}
//setInterval(() => h1Sales.hidden = !h1Sales.hidden, 1000 );
// function textBlowUp(){
//     document.getElementById("pBoss").visibility = "visible";
//     document.getElementById("pBoss").style.fontSize = "10px";
//     document.getElementById("pBoss").style.color = "black";
//     document.getElementById("pBoss").style.fontFamily = "'Courier New', Courier, monospace";

// }
// function textNormal(){
//     document.getElementById("pBoss").style.visibility = "hidden";
// }


 





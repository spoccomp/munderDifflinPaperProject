

//below enlarges and normalizes the funny image
let growShrink = document.querySelector(".copyImg");
growShrink.addEventListener("mouseover",funnyFunction);
function funnyFunction(){ 
    event.target.style.height = "400px";
    event.target.style.width = "400px";
}
growShrink.addEventListener("mouseout",backToNormal);
function backToNormal(){
    event.target.style.height = "200px";
    event.target.style.width = "200px";
}

//below changes the color of the text 
let changeColor = document.querySelector(".pFun");
changeColor.addEventListener("mouseover",makeItFunny);
function makeItFunny(){
    event.target.style.color = "red";
}
changeColor.addEventListener("mouseout",makeItNormal);
function makeItNormal(){
    event.target.style.color = "black";
}

//below two buttons show and hide team photo
let btnShowTeam = document.querySelector(".btnSee");
btnShowTeam.addEventListener("click", seeTeam);
function seeTeam(){
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
let btnHideTeam = document.querySelector(".btnHide");
btnHideTeam.addEventListener("click",hiddenTeam);
function hiddenTeam(){
    document.getElementById("hidden").style.visibility = "hidden";
}

//below opens a new tab to watch competitor's commercial
let btnComm = document.querySelector(".buttonStuff");
btnComm.addEventListener("click", watchUTube);
function watchUTube(){
    //opens a new tab and plays video
    window.open("https://youtu.be/aawxhGuYr2M");
}

//below blows up manager images and normalizes them
let topFunImg1 = document.getElementById("imgManger1"); 
let topFunImg2 = document.getElementById("imgManger2");
let topFunImg3 = document.getElementById("imgManger3");
let topFunImg4 = document.getElementById("imgManger4");

topFunImg1.addEventListener("mouseover",funnyImage);
topFunImg2.addEventListener("mouseover",funnyImage);
topFunImg3.addEventListener("mouseover",funnyImage);
topFunImg4.addEventListener("mouseover",funnyImage);

function funnyImage(){//this blows up manager image
    event.target.style.height = "150px";
    event.target.style.width = "150px";     
}

topFunImg1.addEventListener("mouseout",normImage);
topFunImg2.addEventListener("mouseout",normImage);
topFunImg3.addEventListener("mouseout",normImage);
topFunImg4.addEventListener("mouseout",normImage);

function normImage(){//this normalizes manager image
    event.target.style.height = "50px";
    event.target.style.width = "50px";
}

//////*****TEST CODE THAT WORKS*****///////
// let sect1 = document.getElementById("section-1");
// sect1.addEventListener("mouseover", makeRed);
// function makeRed() {
//     sect1.style.color = "red";
// }
// sect1.addEventListener("mouseout", makeNormal);
// function makeNormal() {
//     sect1.style.color = "white";
// }




 





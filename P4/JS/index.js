let menuButton = document.getElementById('myBut');
let sideListMenu = document.getElementById('sidelist');
let backButton = document.getElementById('backButton');
let allNav = document.querySelector('.nav1');
let hamburgContainer = document.querySelector('#hamburger');


function menuControl() {
    menuButton.style.display="none";
    sideListMenu.style.display="block";
    backButton.style.display="inline";
    sideListMenu.style.width="300px";
    allNav.style.borderRadius="0";
    allNav.style.backgroundColor="gray";
    document.querySelector('.left').style.display="none";
    sideListMenu.style.transition="width 2s";
}

function backBut() {
    menuButton.style.display="inline";
    sideListMenu.style.display="none";
    backButton.style.display="none";
    allNav.style.position="relative";
    allNav.style.borderRadius="12px";
    allNav.style.backgroundColor="burlywood";
    hamburgContainer.style.width="10%";
    document.querySelector('.left').style.display="inline";
}

































// //document.addEventListener('DOMContentLoaded', sideList);
// // const myTopList = document.getElementsByClassName("toplist");
// const myBut = document.getElementById("myBut");
// const mysidelist = document.getElementById("myBut");

// myBut.addEventListener("mouseover", sideList, false);
// myBut.addEventListener("mouseout", myRemove);
// function sideList() { 
//     document.getElementById("hamburger").style.width="50%";
//     document.getElementById("sidelist").style.display="block";
//     document.getElementById("hamburger").style.backgroundColor="grey";
//     myTopList[0].style.display="none";
//     myBut.innerHTML = "&#8592;Back";
//     myBut.style.textAlign = "left";
//     myBut.style.padding = "20px";
// }


// function myRemove() {
//     document.getElementById("hamburger").style.width="0%";
//     document.getElementById("sidelist").style.display="none";
//     document.getElementById("hamburger").style.backgroundColor="grey";
//     myTopList[0].style.display="none";
//     myBut.innerHTML = "&#8592;Back";
//     myBut.style.textAlign = "left";
//     myBut.style.padding = "20px";
//     // myBut.removeEventListener("click", sideList, false);
// }





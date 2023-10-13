// copied from internet

const hamburgetBtn = document.getElementById("hamburger-btn");
const crossBtn = document.getElementById("cross-btn");
const navbar = document.getElementsByTagName("nav")[0];
// console.log(hamburgetBtn, crossBtn, navbar);
hamburgetBtn.addEventListener("click", ()=>{
    navbar.style.transform = "translateX(0%)";
    navbar.style.position = "relative"
    hamburgetBtn.style.display = "none"
})
crossBtn.addEventListener("click", ()=>{
    navbar.style.transform = "translateX(-110%)";
    hamburgetBtn.style.display = "inline";
    navbar.style.position = "absolute";
})
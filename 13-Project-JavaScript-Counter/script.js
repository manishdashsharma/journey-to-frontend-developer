const buttonClick = document.getElementById("btn");
const theCount = document.getElementById("counter");
let num = 1;
theCount.innerText = num;
theCount.style.color = "white";
theCount.style.fontSize = "2em";
setInterval( ()=> {
    if (num < 1000 ){
        num++;
        theCount.innerText= num;
    }
} , 1)
function counter() {
    location.reload();
}
buttonClick.addEventListener('click', counter)
const enter = document.getElementById("enter");
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('#operator'));
const outPutScreen = document.querySelector(".output");
const clear = document.getElementById("clear");
const remove = document.getElementById("delete")

console.log(remove);
numbers.forEach(num => {
    num.addEventListener("click", () => {
        if (outPutScreen.innerText === "Invalid value"){
            clearEnter();
        } else {
            outPutScreen.innerText += num.innerText;
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (outPutScreen.value === "") {
            if (operator.innerText === "-" | operator.innerText === "." ) {
                outPutScreen.innerText += operator.innerText
            } else {
                return
            }
        } else if (outPutScreen.innerText === "Invalid value") {
            clearEnter();
        }
        else {
            if(operator.innerText === "x"){
                outPutScreen.innerText += "*"
                operator.innerText = "x"
                return
            }
            outPutScreen.innerText += operator.innerText
        }    
    })
})

enter.addEventListener('click',calculate);
function calculate() {
    if(outPutScreen.innerText==""){
        outPutScreen.innerText="";
        outPutScreen += operators.innerText;    
    }
    try {
        outPutScreen.innerText = eval(outPutScreen.innerText)
    } catch (e) {
        outPutScreen.value = "Invalid value"     
    }   
}

remove.addEventListener('click',removeNumber);
function removeNumber() {
    outPutScreen.innerText = outPutScreen.innerText.slice(0, -1)
}

clear.addEventListener("click", clearEnter)

function clearEnter () {
    outPutScreen.innerText = ""
}
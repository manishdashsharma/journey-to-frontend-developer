const box = document.createElement("div");
box.classList.add("box");
document.body.appendChild(box);

const randomColor = () => {
    let val = '0123456789ABCDEF';
    let cons = '#';
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
box.addEventListener("click",(event)=>{
    const circle = document.createElement("div");
    circle.classList.add("circle");
    setTimeout(()=>{
        circle.style.transform = "scale(1)";
    },100)
    setTimeout(()=>{
        circle.style.transform = "scale(0)"
    },5000)
    circle.style.background = randomColor();
    circle.style.left = `${event.clientX-box.getBoundingClientRect().left}px`;
    circle.style.top = `${event.clientY-box.getBoundingClientRect().top}px`;
    console.log(event.clientX,event.clientY)
    box.appendChild(circle);    
    document.body.appendChild(btn);
    })
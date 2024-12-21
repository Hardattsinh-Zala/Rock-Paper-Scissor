let boxes = document.querySelectorAll(".box");
let result = document.querySelector("#result");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let reset = document.querySelector("#reset");

let generator = () => {
    let options = ["rock", "paper", "scissor"];
    let val = Math.floor(Math.random() * 3);
    return options[val];
}

let draw = () => {
    result.innerText = "DRAW";
    result.style.backgroundColor = "grey";
}

let userWin = (win, userChoice, compChoice) => {
    if(win) {
        result.innerText = `You Won. Your ${userChoice} beats ${compChoice}.`;
        result.style.backgroundColor = "green";
        you.innerText++;
    }else {
        result.innerText = `You Lost. ${compChoice} beats your ${userChoice}.`;
        result.style.backgroundColor = "red";
        comp.innerText++;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let userChoice = box.getAttribute("id");
        let compChoice = generator();
        if(userChoice === compChoice) {
            draw();
        }else {
            let win = true;
            if(userChoice === "rock") {
                win = compChoice === "paper" ? false : true;
            }else if(userChoice === "paper") {
                win = compChoice === "scissor" ? false : true;
            }else {
                win = compChoice === "rock" ? false : true;
            }
            userWin(win, userChoice, compChoice);
        }
    })
})

reset.addEventListener("click", () => {
    result.innerText = "Play to see score."
    result.style.backgroundColor = "black";
    you.innerText = "0";
    comp.innerText = "0";
})
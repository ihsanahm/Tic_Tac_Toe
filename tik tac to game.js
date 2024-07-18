let userbtn = document.querySelectorAll(".button-option");
let newgame = document.getElementById("new-game");
let restartgame = document.getElementById("restart");
let msgOfgame = document.getElementById("message");
let msgContainer = document.querySelector(".message-container");
 
//this method is for disabling the buttons
const DisableButtons = () => {
    userbtn.forEach((element) => {
        element.disabled = true;
    });
};

//this function is for winning
const winFunction = (letter) => {
    DisableButtons();
    msgOfgame.innerText = `${letter} wins! 🎉🎉🥳🥳
`;
    msgOfgame.style.backgroundColor="green";
    msgContainer.classList.remove("hide");
};

let winningPatterns = [
    [0, 1, 2], [0, 3, 6],
    [2, 5, 8], [6, 7, 8],
    [3, 4, 5], [1, 4, 7],
    [0, 4, 8], [2, 4, 6]
];

let Xturn = true;
let count = 0;
//wingin checker logic here
const winchecker = () => {
    for (let i of winningPatterns) {
        let [element1, element2, element3] = [
            userbtn[i[0]].innerText,
            userbtn[i[1]].innerText,
            userbtn[i[2]].innerText
        ];

        if (element1 !== "" && element2 !== "" && element3 !== "") {
            if (element1 === element2 && element2 === element3) {
                winFunction(element1);
                return; 
            }
        }
    }

    // Check for draw
    if (count === 9) {
        msgOfgame.innerText = "Draw";
        msgContainer.classList.remove("hide");
        DisableButtons();
    }
};

userbtn.forEach((element) => {
    element.addEventListener("click", () => {
        if (Xturn) {
            Xturn = false;
            element.innerText = "X";
            element.disabled = true;
        } else {
            Xturn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        winchecker();
    });
});
//Actionlisnter here
newgame.addEventListener("click", () => {
    location.reload();
});

restartgame.addEventListener("click", () => {
    userbtn.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    msgContainer.classList.add("hide");
    msgOfgame.innerText = "";
    Xturn = true;
    count = 0;
});

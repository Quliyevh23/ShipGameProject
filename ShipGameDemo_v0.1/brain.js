const buttons = document.querySelectorAll('.GameContainer button');

let triesLeft = 15; 
let shipIndex = Math.floor(Math.random() * buttons.length);

const infoSpan = document.querySelector('.Info span');
infoSpan.innerText = `Tries left: ${triesLeft}`;

alert("Copyright Quliyev Ali and Pashazade Kenan :)");

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        
        if (index === shipIndex) {
            button.innerText = "🚢";
            button.style.backgroundColor = "green";
            infoSpan.innerText = "Congratulations! You found the ship! 🚀";
            disableAllButtons(); 
        } else {
            button.innerText = "X";
            button.style.backgroundColor = "red";
            button.disabled = true; 
            triesLeft--;
            infoSpan.innerText = ` Tries left: ${triesLeft} `;
            
            if(triesLeft < 3){
                infoSpan.style.backgroundColor = "red";
            }

            if (triesLeft === 0) {
                infoSpan.style.backgroundColor = "white";
                infoSpan.innerText = "Game Over! The ship was here 🚢.";
                buttons[shipIndex].style.backgroundColor = "green"; 
                buttons[shipIndex].innerText = "🚢";
                disableAllButtons();
            }
        }
    });
});

function disableAllButtons() {
    buttons.forEach(button => button.disabled = true);
}

document.querySelector('.Menu button:nth-child(1)').addEventListener('click', () => {
    window.location.reload(); 
});
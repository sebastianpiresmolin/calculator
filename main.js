
const button1 = document.getElementById("n1btn");

const buttonPressed = e => {
    console.log(e.target.id);
}

for (let buttons in button1) {
    button.addEventListener("click", buttonPressed);
}
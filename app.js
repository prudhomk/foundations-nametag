const input = document.getElementById('change-name');
const newName = document.getElementById('input-name');
const sideName = document.getElementById('input-name-side');
const button = document.getElementById('name-button');
const background = document.getElementById('background');
const clickValue = document.getElementById('name-number');
console.log(input);

let clickNumber = 0;

button.addEventListener('click', () => {
    clickNumber++;
    const userTyped = input.value;
    sideName.textContent = userTyped;
    newName.textContent = userTyped;
    setBg();
    console.log(clickNumber);
    clickValue.textContent = clickNumber;
});

//Found online, studying how to write from scratch
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = "#" + randomColor;
    let background = "#" + randomColor;
}


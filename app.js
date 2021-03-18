const input = document.getElementById('change-name');
const newName = document.getElementById('input-name');
const button = document.getElementById('name-button');

console.log(input);


button.addEventListener('click', () => {
    const userTyped = input.value;
    newName.textContent = userTyped;
}
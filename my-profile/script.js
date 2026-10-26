const greetButton = document.getElementById('greetButton');
const greetMessage = document.getElementById('greetMessage');

greetButton.addEventListener('click', () => {
    greetMessage.textContent = 'ยินดีต้อนรับ Nutcha!';
    greetMessage.hidden = false;
});
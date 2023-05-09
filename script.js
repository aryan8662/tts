const text = document.querySelector('#text');
const language = document.querySelector('#language');
const speak = document.querySelector('#speak');

speak.addEventListener('click', () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text.value;
    msg.lang = language.value;
    speechSynthesis.speak(msg);
});

// const content = $('header');
// const backgrounds = [
//    "url('../img/1.jpg')",
//    "url('../img/2.jpg')",
//    "url('../img/3.jpg')",
//    "url('../img/4.jpg')",
//    "url('../img/5.jpg')",
// ];

// let current = 0;

// function nextBackground() {
//    current++;
//    current = current % backgrounds.length;
//    content.css('background-image', backgrounds[current]);
// };

// setInterval(nextBackground, 6000);

// content.css('background-image', backgrounds[current]);

const inputArr = document.querySelectorAll('.subscribe input');
const subscribeTextarea = document.querySelectorAll('.subscribe textarea')[0];

inputArr[1].placeholder = 'Имя и фамилия';
inputArr[2].placeholder = 'Почта';
inputArr[3].placeholder = 'Телефон';

subscribeTextarea.placeholder = 'Ваш вопрос'
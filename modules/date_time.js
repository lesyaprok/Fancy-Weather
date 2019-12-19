const weekdays = {
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Понедельник', 'Вторник', 'Среда'],
    by: ['Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Субота', 'Нядзеля', 'Панядзелак', 'Аўторак', 'Серада']
}

setInterval(() => time.innerHTML = `${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`, 0, 60000);
// date.innerHTML = new Date().toDateString();
const options = { weekday: 'short', month: 'long', day: 'numeric' }
date.innerHTML = new Date().toLocaleDateString('en-EN', options);

const d1 = document.getElementById('day1');
const d2 = document.getElementById('day2');
const d3 = document.getElementById('day3');
const getAday = new Date().getDay() - 1;

d1.innerHTML = weekdays.en[getAday + 1];
d2.innerHTML = weekdays.en[getAday + 2];
d3.innerHTML = weekdays.en[getAday + 3];
const unsplashID = '75d70c7a0ebe2b3acc928b6e341b5c8b8d1a4e64beaf37fef3fb7585f4027796';
const d = new Date().getMonth();
const t = new Date().getHours();
let query;

if (d <= 1 || d === 11) {
    query = 'winter';
}
if (d >= 2 && d <= 4) {
    query = 'spring';
}
if (d >= 5 && d <= 7) {
    query = 'summer';
}
if (d >= 8 && d <= 10) {
    query = 'autumn';
}

let query2;
if (t >= 00 && t < 5 || t >= 21) {
    query2 = 'night'
}
if (t >= 5 && t < 12) {
    query2 = 'morning'
}
if (t >= 12 && t < 17) {
    query2 = 'day'
}
if (t >= 17 && t < 21) {
    query2 = 'evening'
}

const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${query}+${query2}+nature&client_id=${unsplashID}`;
const getImage = document.onload = () => fetch(url).then(res => res.json()).then(data =>
    document.querySelector('body').style.background = `url(${data.urls.regular}) center center / cover no-repeat fixed`);
getImage();

//reload image on click
let reload = document.getElementById('reload');
reload.addEventListener('click', (e) => getImage());
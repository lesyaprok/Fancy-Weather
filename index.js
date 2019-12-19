// let cityName;
// const daily = `https://api.openweathermap.org/data/2.5/weather?q=cityName&lang=en&units=metric&APPID=7628b84858689e70d784fa009f97eea5`;
// const threeDays = `https://api.openweathermap.org/data/2.5/forecast?q=cityName&lang=en&units=metric&APPID=7628b84858689e70d784fa009f97eea5`;

// //карта
// mapboxgl.accessToken = 'pk.eyJ1IjoibGVzeWFwcm9rIiwiYSI6ImNrM3pwMGJxazA2MjYzbW10NTA5YzBtd2MifQ.LxzBp9Ou93eEfYgCMqC4tA';
// var map = new mapboxgl.Map({
//     container: "map",
//     style: "mapbox://styles/mapbox/streets-v11",
//     center: [-74.5, 40],
//     zoom: 3
// });
// //zoom, current location
// map.addControl(new mapboxgl.NavigationControl());
// map.addControl(new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     showUserLocation: true,
//     trackUserLocation: true
// }));

// //geocoder
// const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
// const getLocation = () => {
//     mapboxClient.geocoding
//         .forwardGeocode({
//             query: cityName,
//             autocomplete: false,
//             limit: 1
//         })
//         .send()
//         .then(function (response) {
//             if (
//                 response &&
//                 response.body &&
//                 response.body.features &&
//                 response.body.features.length
//             ) {
//                 const feature = response.body.features[0];

//                 const map = new mapboxgl.Map({
//                     container: 'map',
//                     style: 'mapbox://styles/mapbox/streets-v11',
//                     center: feature.center,
//                     zoom: 11
//                 });
//                 new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
//             }
//         });
// }


// //фоновое изображение
// const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=75d70c7a0ebe2b3acc928b6e341b5c8b8d1a4e64beaf37fef3fb7585f4027796';
// const getImage = document.onload = () => fetch(url).then(res => res.json()).then(data =>
//     document.querySelector('body').style.background = `url(${data.urls.regular}) center center / cover no-repeat fixed`);
// getImage();



// //изображение по клику на кнопку

// let reload = document.getElementById('reload');
// reload.addEventListener('click', (e) => getImage());



//time and date
// const weekdays = {
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//     ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     by: ['Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Субота', 'Нядзеля']
// }

// setInterval(() => time.innerHTML = `${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`, 0, 60000);
// // date.innerHTML = new Date().toDateString();
// const options = { weekday: 'short', month: 'long', day: 'numeric' }
// date.innerHTML = new Date().toLocaleDateString('en-EN', options);

// const d1 = document.getElementById('day1');
// const d2 = document.getElementById('day2');
// const d3 = document.getElementById('day3');
// const getAday = new Date().getDay() - 1;

// d1.innerHTML = weekdays.en[getAday + 1];
// d2.innerHTML = weekdays.en[getAday + 2];
// d3.innerHTML = weekdays.en[getAday + 3];


//смена языков
// const lang = document.getElementById('language');
// const cel_far = document.getElementById('temperature-buttons');

// lang.addEventListener('change', e => {
//     if (e.target.value === 'EN') {
//         d1.innerHTML = weekdays.en[getAday + 1],
//             d2.innerHTML = weekdays.en[getAday + 2],
//             d3.innerHTML = weekdays.en[getAday + 3],
//             document.getElementById('h').innerText = 'HUMIDITY: ',
//             document.getElementById('w').innerText = 'WIND: ',
//             document.getElementById('f').innerText = 'FEELS LIKE: ',
//             document.getElementById('ltd').innerText = 'Latitude: ',
//             document.getElementById('lng').innerText = 'Longitude: ',
//             date.innerHTML = new Date().toLocaleDateString('en-EN', options),
//             fetch(daily.replace('cityName', `${cityName}`).replace('lang=ru' || 'lang=be', 'lang=en'))
//                 .then(res => res.json()).then(data =>
//                     document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
//                 )
//     }

//     if (e.target.value === 'RU') {
//         d1.innerHTML = weekdays.ru[getAday + 1];
//         d2.innerHTML = weekdays.ru[getAday + 2];
//         d3.innerHTML = weekdays.ru[getAday + 3];
//         document.getElementById('h').innerText = 'ВЛАЖНОСТЬ: ',
//             document.getElementById('w').innerText = 'ВЕТЕР: ',
//             document.getElementById('f').innerText = 'ОЩУЩАЕТСЯ: ',
//             document.getElementById('ltd').innerText = 'Широта: ',
//             document.getElementById('lng').innerText = 'Долгота: ',
//             date.innerHTML = new Date().toLocaleDateString('ru-RU', options),
//             fetch(daily.replace('cityName', `${cityName}`).replace('lang=en' || 'lang=be', 'lang=ru'))
//                 .then(res => res.json()).then(data => {
//                     document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase(),
//                     document.getElementById('location').innerHTML = `${data.name}`}
//                 )
//     }
//     if (e.target.value === 'BY') {
//         d1.innerHTML = weekdays.by[getAday + 1];
//         d2.innerHTML = weekdays.by[getAday + 2];
//         d3.innerHTML = weekdays.by[getAday + 3];
//         document.getElementById('h').innerText = 'ВІЛЬГОТНАСЦЬ: ',
//             document.getElementById('w').innerText = 'ВЕЦЕР: ',
//             document.getElementById('f').innerText = 'АДЧУВАЕЦЦА: ',
//             document.getElementById('ltd').innerText = 'Шырата: ',
//             document.getElementById('lng').innerText = 'Даўгата: ',
//             date.innerHTML = new Date().toLocaleDateString('ru-RU', options).replace('января', 'студзеня')
//                 .replace('февраля', 'лютага')
//                 .replace('марта', 'сакавiка')
//                 .replace('апреля', 'красавiка')
//                 .replace('июня', 'чэрвеня')
//                 .replace('июля', 'лiпеня')
//                 .replace('августа', 'жніўня')
//                 .replace('сентября', 'верасня')
//                 .replace('октября', 'кастрычніка')
//                 .replace('ноября', 'лістапада')
//                 .replace('декабря', 'снежня')
//                 .replace('вт', 'Аў')
//                 .replace('чт', 'Чц')
//                 .replace('вс', 'Нд')

//         fetch(daily.replace('cityName', `${cityName}`).replace('lang=en' || 'lang=ru', 'lang=ru'))
//             .then(res => res.json()).then(data =>
//                 document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
//                     .replace('ЯСНО', 'ЯСНА').replace('ДОЖДЬ', 'ДОЖДЖ').replace('ОБЛАЧНО', 'ВОБЛАЧНА')
//                     .replace('ПАСМУРНО', 'ПАХМУРНА').replace(`ПЕРЕМЕННАЯ`, `ПЕРАМЕННАЯ`).replace('ОБЛАЧНОСТЬ', 'ВОБЛАЧНАСЦЬ')
//                     .replace('НЕБОЛЬШАЯ', 'НЕВЯЛIКАЯ').replace('НЕБОЛЬШОЙ', 'НЕВЯЛІКІ').replace('СНЕГОПАД', 'СНЕГАПАД')
//             )
//     }
// }
// )


//широта-долгота
// function success(position) {
//     document.getElementById('latitude').innerText = ConvertDEGToDMS(`${(position.coords.latitude).toFixed(2)}`);
//     document.getElementById('longitude').innerText = ConvertDEGToDMS(`${(position.coords.longitude).toFixed(2)}`);
//     // console.log(position.coords.latitude, position.coords.longitude)
// }
// navigator.geolocation.getCurrentPosition(success);

// //текущая локация
// fetch('https://ipinfo.io/json?token=08c63d5703104c').then(res => res.json()).then(data => {
//     cityName = data.city,
//         document.getElementById('location').innerHTML = `${cityName}, ${data.country}`;
//     // cityName = document.getElementById('location').textContent;

//     getWeatherOnDay(cityName);
//     getWeatherOnThreeDays(cityName);

// });

// //текущая погода, погода на день
// const getWeatherOnDay = (cityName) => {
//     fetch(daily.replace('cityName', `${cityName}`))
//         .then(res => res.json()).then(data => {
//             // let d = new Date(data.dt * 1000);
//             // document.getElementById('time').innerHTML = `${d.getHours()}:${d.getMinutes()}`;
//             document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase(),
//             document.getElementById('location').innerHTML = `${data.name}, ${data.sys.country}`,
//             document.getElementById('icon').src = `./data/${data.weather[0].icon}.png`,
//             document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`,
//             document.getElementById('humidity').innerHTML = `${data.main.humidity}%`,
//             document.getElementById('wind').innerHTML = `${Math.round(data.wind.speed)} m/s`,
//             document.getElementById('feelslike').innerHTML =
//             Math.round(- 2.7 + 1.04 * data.main.temp + 2.0 * (data.main.pressure / 1000) - 0.65 * data.wind.speed) + '&#xb0;'
//         });

//     if (lang.value === 'RU') {
//         fetch(daily.replace('cityName', `${cityName}`).replace('lang=en', 'lang=ru'))
//             .then(res => res.json()).then(data =>
//                 document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
//             )
//     }
//     if (lang.value === 'EN') {
//         fetch(daily.replace('cityName', `${cityName}`).replace('lang=ru', 'lang=en'))
//             .then(res => res.json()).then(data =>
//                 document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
//             )
//     }
//     if (lang.value === 'BY') {
//         fetch(daily.replace('cityName', `${cityName}`).replace('lang=en' || 'lang=ru', 'lang=ru'))
//             .then(res => res.json()).then(data =>
//                 document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
//             )
//     }
//     if (cel_far.value === 'fahrenheit') {
//         fetch(daily.replace('cityName', `${cityName}`).replace('metric', 'imperial'))
//             .then(res => res.json()).then(data => {
//                 document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`;
//                 document.getElementById('feelslike').innerHTML =
//                     Math.round(- 2.7 + 1.04 * data.main.temp + 2.0 * (data.main.pressure / 1000) - 0.65 * data.wind.speed) + '&#xb0;'
//             })
//     }
//     if (cel_far.value === 'celsius') {
//         fetch(daily.replace('cityName', `${cityName}`).replace('imperial' || 'metric', 'metric'))
//             .then(res => res.json()).then(data => {
//                 document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`;
//             })
//     }
// }


// //выбор C || F
// cel_far.addEventListener('change', (e) => {
//     if (e.target.value == 'fahrenheit') {
//         fetch(daily.replace('cityName', `${cityName}`).replace('metric', 'imperial'))
//             .then(res => res.json()).then(data => {
//                 document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`
//             });
//         fetch(threeDays.replace('cityName', `${cityName}`).replace('metric', 'imperial'))
//             .then(res => res.json()).then(data => {
//                 const filter_days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
//                 document.getElementById('t1').innerHTML = `${Math.round(filter_days[1].main.temp)}&#xb0;`,
//                     document.getElementById('t2').innerHTML = `${Math.round(filter_days[2].main.temp)}&#xb0;`,
//                     document.getElementById('t3').innerHTML = `${Math.round(filter_days[3].main.temp)}&#xb0;`
//             })
//     }
//     if (e.target.value == 'celsius') {
//         fetch(daily.replace('cityName', `${cityName}`).replace('imperial', 'metric'))
//             .then(res => res.json()).then(data => {
//                 document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`
//             });
//         fetch(threeDays.replace('cityName', `${cityName}`).replace('imperial', 'metric'))
//             .then(res => res.json()).then(data => {
//                 const filter_days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
//                 document.getElementById('t1').innerHTML = `${Math.round(filter_days[1].main.temp)}&#xb0;`,
//                     document.getElementById('t2').innerHTML = `${Math.round(filter_days[2].main.temp)}&#xb0;`,
//                     document.getElementById('t3').innerHTML = `${Math.round(filter_days[3].main.temp)}&#xb0;`
//             })
//     }


// }
// )


// //функция для 3 дней погоды

// const getWeatherOnThreeDays = (cityName) => {
//     fetch(threeDays.replace('cityName', `${cityName}`))
//         .then(res => res.json()).then(data => {
//             // console.log(data)
//             const days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
//             document.getElementById('t1').innerHTML = `${Math.round(days[1].main.temp)}&#xb0;`,
//                 document.getElementById('t2').innerHTML = `${Math.round(days[2].main.temp)}&#xb0;`,
//                 document.getElementById('t3').innerHTML = `${Math.round(days[3].main.temp)}&#xb0;`,
//                 document.getElementById('t1_icon').src = `data/${days[1].weather[0].icon}.png`,
//                 document.getElementById('t2_icon').src = `data/${days[2].weather[0].icon}.png`,
//                 document.getElementById('t3_icon').src = `data/${days[3].weather[0].icon}.png`

//         }
//         );
//     if (cel_far.value === 'fahrenheit') {
//         fetch(threeDays.replace('cityName', `${cityName}`).replace('metric' || 'imperial', 'imperial'))
//             .then(res => res.json()).then(data => {
//                 const filter_days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
//                 document.getElementById('t1').innerHTML = `${Math.round(filter_days[1].main.temp)}&#xb0;`,
//                     document.getElementById('t2').innerHTML = `${Math.round(filter_days[2].main.temp)}&#xb0;`,
//                     document.getElementById('t3').innerHTML = `${Math.round(filter_days[3].main.temp)}&#xb0;`
//             })
//     }
//     if (cel_far.value === 'celsius') {
//         fetch(threeDays.replace('cityName', `${cityName}`).replace('imperial' || 'metric', 'metric'))
//             .then(res => res.json()).then(data => {
//                 const filter_days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
//                 document.getElementById('t1').innerHTML = `${Math.round(filter_days[1].main.temp)}&#xb0;`,
//                     document.getElementById('t2').innerHTML = `${Math.round(filter_days[2].main.temp)}&#xb0;`,
//                     document.getElementById('t3').innerHTML = `${Math.round(filter_days[3].main.temp)}&#xb0;`
//             })
//     }

// }

// //конвертация в градусы, минуты
// const ConvertDEGToDMS = (deg, lat) => {
//     const absolute = Math.abs(deg);
//     const degrees = Math.floor(absolute);
//     const minutesNotTruncated = (absolute - degrees) * 60;
//     const minutes = Math.floor(minutesNotTruncated);
//     const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);

//     if (lat) {
//         const direction = deg >= 0 ? "N" : "S";
//     } else {
//         const direction = deg >= 0 ? "E" : "W";
//     }

//     return degrees + "°" + minutes + "'";
// }


//функция для геокода
// const getGeoCode = (cityName) => {
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=541e04cb4db34cd6ac61480c36ab855b`)
//         .then(res => res.json()).then(data => {
//             document.getElementById('latitude').innerHTML = ConvertDEGToDMS(`${(data.results[0].geometry.lat).toFixed(2)}`);
//             document.getElementById('longitude').innerHTML = ConvertDEGToDMS(`${(data.results[0].geometry.lng).toFixed(2)}`);
//         })
// }



// document.getElementById('search-input').addEventListener('change', (e) => {
//     document.getElementById('location').innerHTML = document.getElementById('search-input').value,
//         // cityName = document.getElementById('search-input').value,
//         cityName = document.getElementById('location').textContent;
//     getWeatherOnDay(cityName);
//     getWeatherOnThreeDays(cityName);
//     getGeoCode(cityName);
//     getLocation();
// }
// )

//ненужная хрень

// document.getElementById('search').addEventListener('click', () => 
// cityName = document.getElementById('search-input').value,
// getWeatherOnDay(cityName)
// )



//SpeachRecognition
// const microphone = document.getElementById('microphone');
// microphone.onclick = () => {
//     window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//     const recognition = new SpeechRecognition();
//     recognition.interimResults = true;
//     recognition.lang = 'ru-Ru' || 'en-En';
//     // recognition.lang = 'en-En';


//     recognition.addEventListener('result', e => {
//         document.getElementById('search-input').value = e.results[0][0].transcript,
//             cityName = e.results[0][0].transcript,
//             document.getElementById('location').innerHTML = document.getElementById('search-input').value
//         getWeatherOnDay(cityName);
//         getWeatherOnThreeDays(cityName);
//         getGeoCode(cityName);
//         getLocation();
//     })
//     // recognition.addEventListener('end', recognition.start);
//     recognition.start();
// }

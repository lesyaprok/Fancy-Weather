const lang = document.getElementById('language');
const cel_far = document.getElementById('temperature-buttons');

lang.addEventListener('change', e => {
    if (e.target.value === 'EN') {
        d1.innerHTML = weekdays.en[getAday + 1],
            d2.innerHTML = weekdays.en[getAday + 2],
            d3.innerHTML = weekdays.en[getAday + 3],
            document.getElementById('h').innerText = 'HUMIDITY: ',
            document.getElementById('w').innerText = 'WIND: ',
            document.getElementById('f').innerText = 'FEELS LIKE: ',
            document.getElementById('ltd').innerText = 'Latitude: ',
            document.getElementById('lng').innerText = 'Longitude: ',
            date.innerHTML = new Date().toLocaleDateString('en-EN', options),
            fetch(daily.replace('cityName', `${cityName}`).replace('lang=ru' || 'lang=be', 'lang=en'))
                .then(res => res.json()).then(data =>
                    document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
                )
    }

    if (e.target.value === 'RU') {
        d1.innerHTML = weekdays.ru[getAday + 1];
        d2.innerHTML = weekdays.ru[getAday + 2];
        d3.innerHTML = weekdays.ru[getAday + 3];
        document.getElementById('h').innerText = 'ВЛАЖНОСТЬ: ',
        document.getElementById('w').innerText = 'ВЕТЕР: ',
        document.getElementById('f').innerText = 'ОЩУЩАЕТСЯ: ',
        document.getElementById('ltd').innerText = 'Широта: ',
        document.getElementById('lng').innerText = 'Долгота: ',
        date.innerHTML = new Date().toLocaleDateString('ru-RU', options),
            fetch(daily.replace('cityName', `${cityName}`).replace('lang=en' || 'lang=be', 'lang=ru'))
                .then(res => res.json()).then(data => {
                    document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
                }
                )
    }
    if (e.target.value === 'BY') {
        d1.innerHTML = weekdays.by[getAday + 1];
        d2.innerHTML = weekdays.by[getAday + 2];
        d3.innerHTML = weekdays.by[getAday + 3];
        document.getElementById('h').innerText = 'ВІЛЬГОТНАСЦЬ: ',
            document.getElementById('w').innerText = 'ВЕЦЕР: ',
            document.getElementById('f').innerText = 'АДЧУВАЕЦЦА: ',
            document.getElementById('ltd').innerText = 'Шырата: ',
            document.getElementById('lng').innerText = 'Даўгата: ',
            date.innerHTML = new Date().toLocaleDateString('ru-RU', options).replace('января', 'студзеня')
                .replace('февраля', 'лютага')
                .replace('марта', 'сакавiка')
                .replace('апреля', 'красавiка')
                .replace('июня', 'чэрвеня')
                .replace('июля', 'лiпеня')
                .replace('августа', 'жніўня')
                .replace('сентября', 'верасня')
                .replace('октября', 'кастрычніка')
                .replace('ноября', 'лістапада')
                .replace('декабря', 'снежня')
                .replace('вт', 'Аў')
                .replace('чт', 'Чц')
                .replace('вс', 'Нд')

        fetch(daily.replace('cityName', `${cityName}`).replace('lang=en' || 'lang=ru', 'lang=ru'))
            .then(res => res.json()).then(data =>
                document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
                    .replace('ЯСНО', 'ЯСНА').replace('ДОЖДЬ', 'ДОЖДЖ').replace('ОБЛАЧНО', 'ВОБЛАЧНА')
                    .replace('ПАСМУРНО', 'ПАХМУРНА').replace(`ПЕРЕМЕННАЯ`, `ПЕРАМЕННАЯ`).replace('ОБЛАЧНОСТЬ', 'ВОБЛАЧНАСЦЬ')
                    .replace('НЕБОЛЬШАЯ', 'НЕВЯЛIКАЯ').replace('НЕБОЛЬШОЙ', 'НЕВЯЛІКІ').replace('СНЕГОПАД', 'СНЕГАПАД')
            )
    }
}
)
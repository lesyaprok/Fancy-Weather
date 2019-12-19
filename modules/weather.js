const someCountries = {'BY': 'BELARUS', 'RU' : 'RUSSIA' , 'UA' : 'UKRAINE',};

//current, one day weather
const getWeatherOnDay = (cityName) => {
    fetch(daily.replace('cityName', `${cityName}`))
        .then(res => res.json()).then(data => {
            let d = new Date(data.dt * 1000);
            document.getElementById('time').innerHTML = `${d.getHours()}:${d.getMinutes()}`;
            document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase(),
                document.getElementById('location').innerHTML = `${data.name}, ${names[data.sys.country]}`,
                document.getElementById('icon').src = `./data/${data.weather[0].icon}.png`,
                document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`,
                document.getElementById('humidity').innerHTML = `${data.main.humidity}%`,
                document.getElementById('wind').innerHTML = `${Math.round(data.wind.speed)} m/s`,
                document.getElementById('feelslike').innerHTML =
                Math.round(- 2.7 + 1.04 * data.main.temp + 2.0 * (data.main.pressure / 1000) - 0.65 * data.wind.speed) + '&#xb0;'
        });

    if (lang.value === 'RU') {
        fetch(daily.replace('cityName', `${cityName}`).replace('lang=en', 'lang=ru'))
            .then(res => res.json()).then(data =>
                document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
            )
    }
    if (lang.value === 'EN') {
        fetch(daily.replace('cityName', `${cityName}`).replace('lang=ru', 'lang=en'))
            .then(res => res.json()).then(data =>
                document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
            )
    }
    if (lang.value === 'BY') {
        fetch(daily.replace('cityName', `${cityName}`).replace('lang=en' || 'lang=ru', 'lang=ru'))
            .then(res => res.json()).then(data =>
                document.getElementById('description').innerHTML = (data.weather[0].description).toUpperCase()
            )
    }
    if (cel_far.value === 'fahrenheit') {
        fetch(daily.replace('cityName', `${cityName}`).replace('metric', 'imperial'))
            .then(res => res.json()).then(data => {
                document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`;
                document.getElementById('feelslike').innerHTML =
                    Math.round(- 2.7 + 1.04 * data.main.temp + 2.0 * (data.main.pressure / 1000) - 0.65 * data.wind.speed) + '&#xb0;'
            })
    }
    if (cel_far.value === 'celsius') {
        fetch(daily.replace('cityName', `${cityName}`).replace('imperial' || 'metric', 'metric'))
            .then(res => res.json()).then(data => {
                document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`;
            })
    }
}


//change C || F
cel_far.addEventListener('change', (e) => {
    if (e.target.value == 'fahrenheit') {
        fetch(daily.replace('cityName', `${cityName}`).replace('metric', 'imperial'))
            .then(res => res.json()).then(data => {
                document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`
            });
        fetch(threeDays.replace('cityName', `${cityName}`).replace('metric', 'imperial'))
            .then(res => res.json()).then(data => {
                const filter_days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
                document.getElementById('t1').innerHTML = `${Math.round(filter_days[1].main.temp)}&#xb0;`,
                    document.getElementById('t2').innerHTML = `${Math.round(filter_days[2].main.temp)}&#xb0;`,
                    document.getElementById('t3').innerHTML = `${Math.round(filter_days[3].main.temp)}&#xb0;`
            })
    }
    if (e.target.value == 'celsius') {
        fetch(daily.replace('cityName', `${cityName}`).replace('imperial', 'metric'))
            .then(res => res.json()).then(data => {
                document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&#xb0;`
            });
        fetch(threeDays.replace('cityName', `${cityName}`).replace('imperial', 'metric'))
            .then(res => res.json()).then(data => {
                const filter_days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
                document.getElementById('t1').innerHTML = `${Math.round(filter_days[1].main.temp)}&#xb0;`,
                    document.getElementById('t2').innerHTML = `${Math.round(filter_days[2].main.temp)}&#xb0;`,
                    document.getElementById('t3').innerHTML = `${Math.round(filter_days[3].main.temp)}&#xb0;`
            })
    }


}
)


//3 days weather

const getWeatherOnThreeDays = (cityName) => {
    fetch(threeDays.replace('cityName', `${cityName}`))
        .then(res => res.json()).then(data => {
            // console.log(data)
            const days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
            document.getElementById('t1').innerHTML = `${Math.round(days[1].main.temp)}&#xb0;`,
                document.getElementById('t2').innerHTML = `${Math.round(days[2].main.temp)}&#xb0;`,
                document.getElementById('t3').innerHTML = `${Math.round(days[3].main.temp)}&#xb0;`,
                document.getElementById('t1_icon').src = `data/${days[1].weather[0].icon}.png`,
                document.getElementById('t2_icon').src = `data/${days[2].weather[0].icon}.png`,
                document.getElementById('t3_icon').src = `data/${days[3].weather[0].icon}.png`

        }
        );
    if (cel_far.value === 'fahrenheit') {
        fetch(threeDays.replace('cityName', `${cityName}`).replace('metric' || 'imperial', 'imperial'))
            .then(res => res.json()).then(data => {
                const filter_days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
                document.getElementById('t1').innerHTML = `${Math.round(filter_days[1].main.temp)}&#xb0;`,
                    document.getElementById('t2').innerHTML = `${Math.round(filter_days[2].main.temp)}&#xb0;`,
                    document.getElementById('t3').innerHTML = `${Math.round(filter_days[3].main.temp)}&#xb0;`
            })
    }
    if (cel_far.value === 'celsius') {
        fetch(threeDays.replace('cityName', `${cityName}`).replace('imperial' || 'metric', 'metric'))
            .then(res => res.json()).then(data => {
                const filter_days = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
                document.getElementById('t1').innerHTML = `${Math.round(filter_days[1].main.temp)}&#xb0;`,
                    document.getElementById('t2').innerHTML = `${Math.round(filter_days[2].main.temp)}&#xb0;`,
                    document.getElementById('t3').innerHTML = `${Math.round(filter_days[3].main.temp)}&#xb0;`
            })
    }
}

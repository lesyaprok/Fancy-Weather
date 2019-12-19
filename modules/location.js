function success(position) {
    document.getElementById('latitude').innerText = ConvertDEGToDMS(`${(position.coords.latitude).toFixed(2)}`);
    document.getElementById('longitude').innerText = ConvertDEGToDMS(`${(position.coords.longitude).toFixed(2)}`);
    // console.log(position.coords.latitude, position.coords.longitude)
}
navigator.geolocation.getCurrentPosition(success);

//location
fetch('https://ipinfo.io/json?token=08c63d5703104c').then(res => res.json()).then(data => {
    cityName = data.city,
        document.getElementById('location').innerHTML = `${cityName}, ${data.country}`;
    // cityName = document.getElementById('location').textContent;
    getWeatherOnDay(cityName);
    getWeatherOnThreeDays(cityName);
    
    
});


//convert to degrees & minutes
const ConvertDEGToDMS = (deg, lat) => {
    const absolute = Math.abs(deg);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);

    if (lat) {
        const direction = deg >= 0 ? "N" : "S";
    } else {
        const direction = deg >= 0 ? "E" : "W";
    }
    return degrees + "°" + minutes + "'";
}

//geocode
const getGeoCode = (cityName) => {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=541e04cb4db34cd6ac61480c36ab855b`)
        .then(res => res.json()).then(data => {
            document.getElementById('latitude').innerHTML = ConvertDEGToDMS(`${(data.results[0].geometry.lat).toFixed(2)}`);
            document.getElementById('longitude').innerHTML = ConvertDEGToDMS(`${(data.results[0].geometry.lng).toFixed(2)}`);
        })
}

//search
document.getElementById('search-input').addEventListener('change', (e) => {
    document.getElementById('location').innerHTML = document.getElementById('search-input').value,
        // cityName = document.getElementById('search-input').value,
        cityName = document.getElementById('location').textContent;
    getWeatherOnDay(cityName);
    getWeatherOnThreeDays(cityName);
    getGeoCode(cityName);
    getLocation();
}
)
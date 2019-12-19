const microphone = document.getElementById('microphone');
microphone.onclick = () => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'ru-Ru' || 'en-En';
    // recognition.lang = 'en-En';


    recognition.addEventListener('result', e => {
        document.getElementById('search-input').value = e.results[0][0].transcript,
            cityName = e.results[0][0].transcript,
            document.getElementById('location').innerHTML = document.getElementById('search-input').value
        getWeatherOnDay(cityName);
        getWeatherOnThreeDays(cityName);
        getGeoCode(cityName);
        getLocation();
    })
    // recognition.addEventListener('end', recognition.start);
    recognition.start();
}
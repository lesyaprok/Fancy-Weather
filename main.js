//layout
let wrapper = document.getElementById('wrapper');
wrapper.insertAdjacentHTML("beforeend",
    `<section class="control">
        <button class="reload" id="reload">&#x21bb</button>

        <select class="language" id="language">
            <option value="EN">EN</option>
            <option value="RU" id="ru">RU</option>
            <option value="BY">BY</option>
        </select>

        <select class="temperature-buttons" id="temperature-buttons">
            <option class="temperature-buttons--button" value="celsius" id="celsius">&#xb0;C</option>
            <option class="temperature-buttons--button" value="fahrenheit" id="fahrenheit">&#xb0;F</option>
        </select>
    </section>`);
wrapper.insertAdjacentHTML("beforeend",
    `<section class="info">
            <div class="city" id="location"></div>
            <div class="date" id="date"></div>
            <div class="time" id="time"></div>
        </section>
    <section class="weather-on-day">
        <div class="temperature" id="temperature"></div>
        <div class="weather-description">
            <img id="icon" src='' alt=''>
            <div><span id="description"></span></div>
            <div><span id="f">FEELS LIKE: </span><span id="feelslike"></span></div>
            <div><span id="w">WIND: </span><span id="wind"></span></div>
            <div><span id="h">HUMIDITY: </span><span id="humidity"></span></div>
        </div>
    </section>`);
wrapper.insertAdjacentHTML("beforeend", 
    `<section class="three-day-weather">
        <div>
            <div id="day1">Monday</div>
            <span id="t1"></span>
            <img class="small_icon" id="t1_icon" src='' alt=''>
        </div>
        <div>
            <div id="day2">Tuesday</div>
            <span id="t2"></span>
            <img class="small_icon" id='t2_icon' src='' alt=''>
        </div>
        <div>
            <div id="day3">Wednesday</div>
            <span id="t3"></span>
            <img class="small_icon" id="t3_icon" src='' alt=''>
        </div>
    </section>`);
wrapper.insertAdjacentHTML("beforeend", 
    `
    <section class="search-location">
        <div class="search">
            <input class="search-input" id="search-input" type="text" value="">
            <button class="search-icon" id="search"></button>
            <button class="search-microphone" id="microphone" title="Voice search"></button>
        </div>
    </section>

    <section class="map">
        <div id="map"></div>
    </section>

    <section class="geo">
        <div><span id='ltd'>Latitude: </span><span id="latitude"></span></div>
        <div><span id='lng'>Longitude: </span><span id="longitude"></span></div>
    </section>`);          
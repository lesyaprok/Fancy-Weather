let cityName;
const daily = `https://api.openweathermap.org/data/2.5/weather?q=cityName&lang=en&units=metric&APPID=7628b84858689e70d784fa009f97eea5`;
const threeDays = `https://api.openweathermap.org/data/2.5/forecast?q=cityName&lang=en&units=metric&APPID=7628b84858689e70d784fa009f97eea5`;

//карта
mapboxgl.accessToken = 'pk.eyJ1IjoibGVzeWFwcm9rIiwiYSI6ImNrM3pwMGJxazA2MjYzbW10NTA5YzBtd2MifQ.LxzBp9Ou93eEfYgCMqC4tA';
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.5, 40],
    zoom: 3
});
//zoom, current location
map.addControl(new mapboxgl.NavigationControl());
const control = () => {map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    showUserLocation: true,
    trackUserLocation: true
}));}
control()

//geocoder
const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
const getLocation = () => {
    mapboxClient.geocoding
        .forwardGeocode({
            query: cityName,
            autocomplete: false,
            limit: 1
        })
        .send()
        .then(function (response) {
            if (
                response &&
                response.body &&
                response.body.features &&
                response.body.features.length
            ) {
                const feature = response.body.features[0];

                const map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: feature.center,
                    zoom: 11
                });
                new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
            }
        });
}
// getLocation()

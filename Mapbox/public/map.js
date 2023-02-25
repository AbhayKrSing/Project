
let takeout = async (place) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '79b76dcc93msh9fa35a8f5a37f02p196bacjsn393c68ce08f4',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    return  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${place}&days=1`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const longitude = response.location.lon
            const latitude = response.location.lat
            console.log(longitude, latitude)
            return response
        })
        .catch(err => console.error(err));
}

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FiaGF5ODQ5IiwiYSI6ImNsZWlhYWdnbzEybzAzcm16cDVhYjh4MDcifQ.t509E1w73XoNBVeUWlN00w';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [78, 24],
    zoom: 6
});



const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
        color: 'orange'
    },
    mapboxgl: mapboxgl
});

map.addControl(geocoder);
geocoder.on('result', function (result) {  //stackoverflow
    // map.on('click', () => {
    const element = document.createElement('div')
    const targetMarker = document.getElementsByClassName('mapboxgl-marker')[0]
    const child = document.getElementsByTagName('svg')[0]
    targetMarker.insertBefore(element, child)
    element.setAttribute('class', 'xyz')
    addListener(result, text = 'hello world!!!')
    // });
})

async function addListener(result, text) {
    // console.log(result.result.text)
    const wheatherresult = await takeout(result.result.text)
    setTimeout(() => {
        document.getElementsByClassName('xyz')[0].setAttribute('style', 'width:20rem;height:15rem;background-color:grey;position:absolute; bottom:10vh;text-align:center;')
        const textNode = text
        document.getElementsByClassName('xyz')[0].innerHTML = wheatherresult.current.temp_c
    }, 3000)
}


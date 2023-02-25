let takeout = async (place) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '79b76dcc93msh9fa35a8f5a37f02p196bacjsn393c68ce08f4',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    return fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${place}&days=1`, options)
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
    zoom: 3
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
    addListener(result)
    const element = document.createElement('div')
    const targetMarker = document.getElementsByClassName('mapboxgl-marker')[0]
    const child = document.getElementsByTagName('svg')[0]
    targetMarker.insertBefore(element, child)
    element.setAttribute('class', 'xyz')

})

async function addListener(result) {
    // console.log(result.result.text)
    try {
        const wheatherresult = await takeout(result.result.text)

        // document.getElementsByClassName('xyz')[0].setAttribute('style', '')  //jarurat nhi thi iski ab.(kyuki style.css mey .xyz selector use karke code likh diya hai)
        // document.getElementsByClassName('xyz')[0].innerHTML = wheatherresult.current.temp_c
        for (let i = 1; i <= 5; i++) {
            document.getElementsByClassName('xyz')[0].innerHTML += `<p class=id${i}></p>`
        }
        document.getElementsByClassName(`id1`)[0].innerHTML = wheatherresult.location.name
        document.getElementsByClassName(`id2`)[0].innerHTML = `<img>`
        // document.getElementsByTagName('img')[0].src = 'https://clipground.com/images/coconut-tree-vector-clipart-8.png'
        document.getElementsByTagName('img')[0].src = wheatherresult.current.condition.icon
        document.getElementsByClassName(`id3`)[0].innerHTML = wheatherresult.current.condition.text
        document.getElementsByClassName(`id4`)[0].innerHTML = wheatherresult.current.temp_c + "℃"
        document.getElementsByClassName(`id5`)[0].innerHTML = wheatherresult.current.temp_f + " F"


    } catch (error) {
        document.getElementsByClassName('xyz')[0].setAttribute('style', 'justify-content:center')
        document.getElementsByClassName('xyz')[0].innerHTML += `<p>Sorry Info Not Found</p>`
    }

}


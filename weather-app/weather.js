const apiKey = '6a182f3661fad0814bda0b7d886eaa54';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=';
const searchBtn = document.querySelector('.search button');
const searchCity = document.querySelector('.search input');


async function cakeWeather(city) {
    const response = await fetch(apiUrl + apiKey + `&q=${city}`);
    if (response.status === 404 && searchCity.value.toLocaleLowerCase() === 'torekul') {
        myInfo()
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.infoMe').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    } else if (response.status === 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.infoMe').style.display = 'none';
    } else {
        var data = await response.json();
        const weatherIcon = document.querySelector('.weatherImg');
        switch (data.weather[0].main) {
            case 'Clouds':
                weatherIcon.src = './images/clouds.png';
                break;
            case 'Rain':
                weatherIcon.src = './images/rain.png';
                break;
            case 'Clear':
                weatherIcon.src = './images/clear.png';
                break;
            case 'Drizzle':
                weatherIcon.src = './images/drizzle.png';
                break;
            case 'Mist':
                weatherIcon.src = './images/mist.png';
                break;
            case 'Snow':
                weatherIcon.src = './images/snow.png';
                break;
            case 'Haze':
                weatherIcon.src = './images/haze.png';
                break;
        }

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.infoMe').style.display = 'none';

    }
}




searchBtn.addEventListener('click', event => {
    cakeWeather(searchCity.value);
});
const search = document.getElementById('search')

searchCity.addEventListener('keypress', key => {
    if (key.key === 'Enter') {
        const searchCity = document.querySelector('.search input').value;
        cakeWeather(searchCity);

    };
});


function myInfo() {
    const cird = document.querySelector('.cird')

    const info = document.createElement('div')
    info.setAttribute('class', 'infoMe')
    cird.appendChild(info)

    const infoMe = document.querySelector('.infoMe')
    infoMe.innerHTML = ''

    const imgCird = document.createElement('div')
    imgCird.setAttribute('class', 'meImg')
    const h1Cird = document.createElement('h1')
    h1Cird.innerText = 'Torekul Islam'


    infoMe.appendChild(imgCird)
    infoMe.appendChild(h1Cird)

}
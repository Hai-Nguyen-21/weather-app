var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(capitalSearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch} &appid=6308cb7c4a9423cf330b5ddceace8882`;

    let data = await fetch(apiURL).then(res => res.json())
    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        visibility.innerHTML = data.visibility
        wind.innerHTML = data.wind.speed
        sun.innerHTML = data.main.humidity
        let temp = Math.floor((data.main.temp - 273.15))
        value.innerHTML = temp
        shortDesc.innerHTML = data.weather[0] ? data.weather[0].main : ''
        time.innerHTML = new Date().toLocaleString('vi')
        body.setAttribute('class', 'hot')
        if(temp < 25){
            body.setAttribute('class', 'cool')
        } else if(temp <= 22){
            body.setAttribute('class', 'warm')
        } else if(temp <= 19){
            body.setAttribute('class', 'cold')
        }
    } else {
        content.classList.add('hide')
    }

}

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch)
    }
})

changeWeatherUI('Ha Noi')
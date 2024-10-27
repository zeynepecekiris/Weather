const apiKey = 'd579f439a6098e38badd0cc655ad4f02';
const form = document.getElementById('form');
const city = document.getElementById('city');
const weatherDiv = document.getElementById('weather');
const iconDiv = document.getElementById('icon');
const temperatureDiv  = document.getElementById('temperature');
const DescriptionDiv = document.getElementById('Description');
const DetailsDiv = document.getElementById('Details');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = city.value;
    getWeather(cityValue);
});

async function getWeather(cityValue){
   
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        
      
        
        const data = await response.json();
        console.log(data);
        
        const temparature = Math(data.main.temp);
        const icon = data.weather[0].icon;
        const details = [
            `Hissedilen: ${Math.round(data.main.feels_like)}`,
             `Nem Orani: ${data.main.humidity}`,
             `Ruzgar: ${data.wind.speed} m/s`,

        ]

}

const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")
const btnPopup = document.querySelector(".btnLogin-popup")
const iconClose = document.querySelector(".icon-close")
const container = document.querySelector(".container")

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
})
loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
})

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
    container.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
})
iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup");
    container.style.display = "flex";
    contact.style.display = "flex";
    about.style.display = "initial"
})

const apiKey = "456d8fe342fd0f9d08da2b198240181a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";


const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperaturElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description")

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if (location){
        fetchWeather(location);
    }
});
function fetchWeather(location){
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperaturElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
    .catch(error => {
        console.error("Error fetching weather data: ", error);
    });
}
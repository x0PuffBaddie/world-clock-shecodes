function updateTime(){

let manilaElement = document.querySelector("#manila");
let manilaDateElement = manilaElement.querySelector(".date");
let manilaTimeElement = manilaElement.querySelector(".time");
let manilaTime = moment().tz("Asia/Manila");

manilaDateElement.innerHTML = manilaTime.format("Do, MMMM YYYY");
manilaTimeElement.innerHTML = manilaTime.format("H:mm:s");


let saigonElement = document.querySelector("#saigon");
let saigonDateElement = saigonElement.querySelector(".date");
let saigonTimeElement = saigonElement.querySelector(".time");
let saigonTime = moment().tz("Asia/Saigon");

saigonDateElement.innerHTML = saigonTime.format("Do, MMMM YYYY");
saigonTimeElement.innerHTML = saigonTime.format("H:mm:s");


let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("Do, MMMM YYYY");
parisTimeElement.innerHTML = parisTime.format("H:mm:s");

}

function updateCity(event) {
    let cityTimezone = event.target.value;
    if (cityTimezone ==="current") {
        cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =` 
    <div>
    <div class="city"> 
    <div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("Do, MMMM YYYY")}</div>
</div>
<div class="time">${cityTime.format("H:mm:ss")}</div> 
</div> 
<br />
<a href="/"> All cities </a>
`;


}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


updateTime();
setInterval (updateTime, 1000);



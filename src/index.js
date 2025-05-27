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

updateTime();
setInterval (updateTime, 1000);
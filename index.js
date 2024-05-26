let resultElem;
let lesbianAudio = new Audio("Audio/lesbian.mp3");
let gayAudio = new Audio("Audio/gay.mp3");
let straightAudio = new Audio("Audio/straight.mp3");

function init() {
resultElem = document.querySelector("#result");
if(document.querySelector("#button")){
    document.querySelector("#button").addEventListener("click", calculate);

}
if(document.querySelector("#buttonStraight")){
    document.querySelector("#buttonStraight").addEventListener("click", straightCalculate);

}
}
window.addEventListener("load", init);

function calculate() {
    let percentage = 0;
    while(percentage < 50){
        percentage = Math.floor(Math.random() * 100);
    }
    resultElem.innerHTML = "<p id='resultNumber'>"+ percentage + "%</p>";
    if(percentage >= 90){
        resultElem.innerHTML += "<img src='Images/gay.png' alt='Gay Cat'><p> youre so gay blo </p>";
    }
    else if(percentage >= 50){
        resultElem.innerHTML += "<img src='Images/touch.png' alt='Touching Cat'><p> you will be touched tonight ;) </p>";
    }
    let parent = resultElem.parentNode;
    if(parent.id == "lesbian"){
        lesbianAudio.loop = true;
        lesbianAudio.volume = 0.2;
        lesbianAudio.play();
    }
    else if(parent.id == "gay"){
        gayAudio.loop = true;
        gayAudio.volume = 0.2;
        gayAudio.play();
    }
}
function straightCalculate(){
    initMap();
    straightAudio.loop = true;
    straightAudio.volume = 0.5;
    straightAudio.play();
    resultElem.innerHTML = "<p> 0%</p>";
}
function initMap(){
    let map = L.map('map').locate({setView: true, watch: true, maxZoom: 17});

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
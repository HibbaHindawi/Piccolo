let resultElem;

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
}
function straightCalculate(){
    resultElem.innerHTML = "<p> 0%</p>";
}
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
    resultElem.innerHTML = "<p>"+ percentage + "%</p>";
    if(percentage > 90){
        resultElem.innerHTML += "<p> youre so gay blo </p>";
    }
    else if(percentage > 50){
        resultElem.innerHTML += "<p> you will be touched tonight ;) </p>";
    }
}
function straightCalculate(){
    resultElem.innerHTML = "<p> 0%</p>";
}
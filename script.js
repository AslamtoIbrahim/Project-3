
var rate = 0;
function setRate(num){
    rate = num;
    console.log(rate);
}

function submit(){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var rateElement = document.getElementById("rate");
    div1.style.display = "none";
    div2.style.display = "flex";
    rateElement.innerHTML = rate; 
}

function rateAgain(){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var rateElement = document.getElementById("rate");
    div1.style.display = "flex";
    div2.style.display = "none";
    rate = 0;
    rateElement.innerHTML = rate; 
}
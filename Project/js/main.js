"use strict"

var dest = document.getElementById("dest");
var value = dest.value;
var city = dest.options[dest.selectedIndex].text;
var selectedCity = null;

var istanbul = 'linear-gradient(rgb(44, 174, 186, 0.7),rgba(0, 0, 0, 0.7)), url("./images/istanbul.jpg")'
var antalya = 'url("./images/antalya.jpg")'
var trabzon = 'url("./images/trabzon.jpg")'

function changeCity() {
    selectedCity = dest.options[dest.selectedIndex].value;
    if(selectedCity == 'istanbul') {
        document.getElementById('background').style.backgroundImage = istanbul
    }
    
    if(selectedCity == 'antalya') {
        document.getElementById('background').style.backgroundImage = antalya
    }
    
    if(selectedCity == 'trabzon') {
        document.getElementById('background').style.backgroundImage = trabzon
    }
}


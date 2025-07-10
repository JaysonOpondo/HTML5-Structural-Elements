function temperature(){
    // To convert Celsius to Fahrenheit
    // (Cel * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f
}

function weight(){
    // To convert Kilograms to Pounds
    // (Kg * 2.20462)
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.20462;
    document.getElementById("pounds").value = p
}

function distance(){
    // To convert Kilometers to Miles
    // (Km * 0.621371)
    var km = document.getElementById("kilometers").value;
    var m = km * 0.621371;
    document.getElementById("miles").value = m
}
function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = endDate.getTime() - beginDate.getTime();
    var days = millisBetween / millisecondsPerDay;
    return days;  
}

function helloWorld() { 
    console.log("Hello World");
}

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// find all images without alternate text
// and give them a red border
function process() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt === "") {
            images[i].style.border = "3px solid red";
        }
    }
}

// Express server on port 3000
var express = require('express');

// Return the current time in the format "HH:MM:SS"
function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
}
"use strict";



function displayTime() {
    var currentDate = new Date();
    document.getElementById("resultDiv").innerHTML = currentDate.getHours().toString().padStart(2, "0") + ":" + currentDate.getMinutes().toString().padStart(2, "0") + ":" +
        currentDate.getSeconds().toString().padStart(2, "0");
}
document.getElementById("timeBtn").onclick = displayTime;

function displayDoW() {
    var currentDay = new Date();
    var dayOfWeek = currentDay.getDay();
    var strDay;
    switch (dayOfWeek) {
        case 0:
            strDay = "Sunday";
            break;
        case 1:
            strDay = "Monday";
            break;
        case 2:
            strDay = "Tuesday";
            break;
        case 3:
            strDay = "Wednesday"
            break;
        case 4:
            strDay = "Thursday";
            break;
        case 5:
            strDay = "Friday";
            break;
        case 6:
            strDay = "Saturday";
            break;
        default:
            strDay = "A 8-a zi";
            break;



    }
    document.getElementById("resultDiv").innerHTML = "Today is" + " " + strDay;
}
document.getElementById("h2Hover").onmouseover = displayDoW;

var cnt;
cnt = 0;

function DoubleClick() {
    cnt++;
    document.getElementById("resultDiv").innerHTML = "I have been double-clicked " + cnt + " times";
}
document.getElementById("h3DblClick").ondblclick = DoubleClick;


function sumTo(number) {
    debugger
    var number = document.getElementById("sumNum").value;
    if (number <= 0) {
        return document.getElementById("resultDiv").innerHTML = number + " Less or equal than 0";
    }
    else {
        let sum = 0;
        let x = 0;
        for (x; x <= number; x++) sum = x + sum;
        return document.getElementById("resultDiv").innerHTML = "Sum of numbers is " + sum;
    }
}

document.getElementById("calcBtn").onclick = sumTo;
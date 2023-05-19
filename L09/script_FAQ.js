
const myAnswer = document.getElementById("myAnswer");
const myQuestion = document.getElementById("myQuestion");
var cnt;
cnt = 0;

myQuestion.addEventListener("click", myFAQ);

function myFAQ() {
    cnt++
    if (cnt % 2 === 0) {
        myQuestion.classList.add("opened");
        myAnswer.className = "showAnswer"
    }
    else {
        myQuestion.classList.remove("opened");
        myAnswer.className = "myAnswer";
    }
}

const myAnswer1 = document.getElementById("myAnswer1");
const myQuestion1 = document.getElementById("myQuestion1");

myQuestion1.addEventListener("click", myFAQ1);

var cnt1;
cnt1 = 0;

function myFAQ1() {
    cnt1++
    if (cnt1 % 2 === 0) {
        myQuestion1.classList.add("opened");
        myAnswer1.className = "showAnswer";
    }
    else {
        myQuestion1.classList.remove("opened");
        myAnswer1.className = "myAnswer1";
    }
}


const myAnswer2 = document.getElementById("myAnswer2");
const myQuestion2 = document.getElementById("myQuestion2");
var cnt2;
cnt2 = 0;

myQuestion2.addEventListener("click", myFAQ2);

function myFAQ2() {
    cnt2++
    if (cnt2 % 2 === 0) {
        myQuestion2.classList.add("opened");
        myAnswer2.className = "showAnswer"
    }
    else {
        myQuestion2.classList.remove("opened");
        myAnswer2.className = "myAnswer2";
    }
}

const myAnswer3 = document.getElementById("myAnswer3");
const myQuestion3 = document.getElementById("myQuestion3");
var cnt3;
cnt3 = 0;

myQuestion3.addEventListener("click", myFAQ3);

function myFAQ3() {
    cnt3++
    if (cnt3 % 2 === 0) {
        myQuestion3.classList.add("opened");
        myAnswer3.className = "showAnswer"
    }
    else {
        myQuestion3.classList.remove("opened");
        myAnswer3.className = "myAnswer3";
    }
}

const myBGColor = document.getElementById("bgcolor");
myBGColor.addEventListener("change", bgColor);


function bgColor() {
    var color = myBGColor.value;
    document.getElementById("color").style.backgroundColor = color;
}

var cookieExpiry = 365;

/*function setCookie(cookieName, cookieValue, valDays) {


    var crtDate = new Date();
    crtDate.setTime(crtDate.getTime() + (valDays * 24 * 60 * 60 * 1000));
    var exp = "expiry" + crtDate.toUTCString;
    document.cookie = cookieName + "=" + cookieValue + ";" + exp + ";path=/";
}
function getCookie(cookieName) {
    var name = cookieName + "=";
    var cArray = document.cookie.split(";");

    for (let i = 0; i < cArray.length; i++) {
        let crtCookie = cArray[i];
        while (crtCookie.charAt[0] == ' ') {
            crtCookie = crtCookie.substring(1);
        }
        if (crtCookie.indexOf(name) == 0) {
            return crtCookie.substring(name.length, crtCookie.length);
        }
    }
    return " ";
}

function colorChoice() {
    var useColor = getCookie("username");
    if (useColor != "") {
        var myColor = myBGColor.value;
        document.getElementById("color").style.backgroundColor = myColor;
    }
    else{
        if (useColor != "" && useColor != null){
        setCookie("username", myColor, cookieExpiry);
        }
    }
}
*/
var color2 = myBGColor.value;

localStorage.setItem = ("myColor", color2);

const myBGColor2 = document.getElementById("bgcolor").addEventListener("load", bgColor2);
function bgColor2() {
    var myColor = localStorage.getItem("myColor");
    document.getElementById("bgcolor").style.backgroundColor = myColor;
}



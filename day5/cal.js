var ans = 0;

function addition() {


    let a = document.getElementById('screen1').value;
    let b = document.getElementById('screen2').value;


    ans = parseInt(a) + parseInt(b);
}

function subtraction() {

    let a = document.getElementById('screen1').value;
    let b = document.getElementById('screen2').value;

    ans = parseInt(a) - parseInt(b);
}


function multiply() {

    let a = document.getElementById('screen1').value;
    let b = document.getElementById('screen2').value;

    ans = parseInt(a) * parseInt(b);
}


function divide() {

    let a = document.getElementById('screen1').value;
    let b = document.getElementById('screen2').value;

    ans = parseInt(a) / parseInt(b);
}

function submit() {
    alert("the result is =" + ans);
}
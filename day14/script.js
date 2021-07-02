const col = ["red", "yellow", "orange"];

let d1 = document.getElementById("div1");
let d2 = document.getElementById("div2");
let d3 = document.getElementById("div3");

d2.addEventListener('click', f1);

function f1() {
    d2.style.backgroundColor = col[Math.floor(Math.random() * 3)];
}

d3.addEventListener('keydown', f2);

function f2() {
    d3.style.backgroundColor = col[Math.floor(Math.random() * 3)];
}

d1.addEventListener('scroll', f3);

function f3() {
    alert("Don't sroll dear, there is nothing down :) ");
}


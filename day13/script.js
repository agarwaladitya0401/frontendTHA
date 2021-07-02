
let thought = document.getElementsByClassName("thought");
let author = document.getElementsByClassName("author");
let tt = document.querySelector('button');

console.log("end");

async function quote() {

    console.log("hello");
    const res = await fetch("https://api.quotable.io/random");

    const data = await res.json();

    thought[0].textContent = data.content;
    author[0].textContent = "-" + data.author;
    // console.log(data.content);
    // console.log(data);
}

// quote();

tt.addEventListener('click', async () => {
    let res = quote();
    let data = res;

    console.log(data);
})
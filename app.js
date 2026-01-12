let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log("hello");
    
    let h1 = document.querySelector("h1");
    let randomcolor = generatecolor();

    h1.innerText = randomcolor;

    console.log("color updated");

    let div = document.querySelector("#box1")
    div.style.backgroundColor = randomcolor;
    
    
});

function generatecolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

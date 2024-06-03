let modal = document.getElementById("modal");
let btn = document.getElementById("modalBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}


let colorInput = document.getElementById("colorInput");
let colorBtn = document.getElementById("colorBtn");
let allowed_colors = ["red", "blue", "green", "black", "white"]
colorBtn.onclick = function () {
    if (colorInput.value.length != 0 && allowed_colors.includes(colorInput.value)) {
        document.body.style.background = colorInput.value;
    } else {
        alert("only allowed colors: red, blue, green, black, white");
    }
}




let numbersInput = document.getElementById("numbersInput");
let averageBtn = document.getElementById("averageBtn");

averageBtn.onclick = function () {
    let n = numbersInput.value.split(":")
    let sum = 0
    n.forEach(element => {
        sum = sum + parseInt(element)
        
    });
    alert(sum/n.length)
   
}
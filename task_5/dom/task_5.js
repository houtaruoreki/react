let state = false;

let div = document.createElement('div');
div.setAttribute("id","card");

let h2 = document.createElement('h2');
h2.innerText = "Gandalf";

let a = document.createElement('a');
a.innerText = "Go to profile"
a.setAttribute('href',"#");

div.appendChild(h2);
div.appendChild(a);
document.body.appendChild(div);

function hide_text() {
    for(let i = 1; i < 6; i++) {
        document.getElementById(`text${i}`).style.display = state ? "block" : "none";
    }
    document.getElementById("button").innerHTML = state ? "Hide Text" : "Reveal";
    state = !state;
}

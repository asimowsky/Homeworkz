//1st Exercise

var myImage = document.getElementById('image');
myImage.addEventListener("click", function () {
    myImage.classList.toggle("b-2");
});
//2nd Exercise
const paragraphs = document.querySelectorAll("p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add('paragraph');
}

//3rd Exercise

const parent = document.getElementsByClassName('parent');
const h2 = document.createElement('h2');
const value = document.createTextNode("Tuka sum");
h2.appendChild(value)
console.log(h2)

//4th Exercise

const worldCup = ['Argentina', 'Brazil', 'Croatia', 'France', 'Japan', 'Ecuador', 'Serbia', 'THE GOAT MESSI', 'Izvini ronaldo'];
const ul_list = document.createElement('ul');
for (let i = 0; i < worldCup.length; i++) {

    const list_item = document.createElement('li');
    const teams = (worldCup[i])
    list_item.innerHTML = teams;
    ul_list.appendChild(list_item);


}
document.body.appendChild(ul_list);

//5th Exercise

var btnIncrease = document.getElementById('increase');
var btnDecrease = document.getElementById('decrease');

const box = document.getElementById("box");

btnIncrease.addEventListener("click", function () {
    localStorage.setItem("box", "large");
    const wihe = localStorage.getItem("box");
    box.classList.add("large-box");
    box.classList.remove("small-box");

    check(box_load);
});
btnDecrease.addEventListener("click", function () {
    localStorage.setItem("box", "small");
    const wihe = localStorage.getItem("box");
     box.classList.add("small-box")
    box.classList.remove("large-box");
   
    check(box_load);
});
var box_load = localStorage.getItem("box");
function check() {
    if (localStorage.getItem === "large") {

        console.log("now its large")

    }
    else {
        console.log("now its small")

    }
}


check(box);

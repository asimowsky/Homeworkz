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
let box = document.querySelector(".box");
let large = document.getElementById("increase");
let small = document.getElementById("decrease");

increase.addEventListener("click",()=>{
  localStorage.setItem("changeBox","large");
  let type = localStorage.getItem("changeBox");
  HandleChangeBox(type);
})

decrease.addEventListener("click",()=>{
  localStorage.setItem("changeBox","small");
  let type = localStorage.getItem("changeBox");
  HandleChangeBox(type);
})

const HandleChangeBox = (type) => {
    if(type==="large"){
        box.classList.add("boxed-increased");
    }else{
        box.classList.remove("boxed-increased");
    }
}
let type = localStorage.getItem("changeBox");
HandleChangeBox(type);
// let box = document.querySelector(".box");
// let increase = document.getElementById("increase");
// let decrease = document.getElementById("decrease");

// increase.addEventListener("click", function() {
//     localStorage.setItem("changeBox", "increase");
//     let type = localStorage.getItem("changeBox");
//     HandleBoxChange(type);
// });

// decrease.addEventListener("click", function() {
//     localStorage.setItem("changeBox", "decrease");
//     let type = localStorage.getItem("changeBox");
//     HandleBoxChange(type);
// });

// const HandleBoxChange = (type) => {
//     if(type === "increase") {
//         box.classList.add("boxed-increased");
//     } else {
//         box.classList.remove("boxed-increased");
//     }
// }

// let type = localStorage.getItem("changeBox");
// HandleBoxChange(type);
let calc = 3 + 21;
console.log(calc)
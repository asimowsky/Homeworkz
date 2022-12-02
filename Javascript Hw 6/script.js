// 1 Напишете празен p таг во HTML и со помош на Javascript внесете краток Lorem ipsum текст во него

var lorem = document.querySelector("#lorem"); //moze i so getelementbyID
lorem.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, ab.";

//----------------------------------------------------------------------------------------

// 2 Во HTML креирајте копче (-) па потоа span со вредност 0 и уште едно копче (+) --> исто како на сликата
// a На клик на (-) бројката да се намалува
// b На клик на (+) бројката да се зголемува
// c Бројката не смее да отиде под нула и над десет

//-----------ANSWER

// var counter = document.querySelector("#counter");
// var btnIncrease = document.querySelector("#plus");
// var btnDecrease = document.querySelector("#minus");
// var count = 0;
// btnIncrease.addEventListener("click", function () {
//     count += 1;
//     if (count >= 10) {
//         count = 10;
//     }
//     counter.innerHTML = count;
// });

// btnDecrease.addEventListener("click", function () {
//     count -= 1;
//     if (count <= 0) {
//         count = 0;
//     }
//     counter.innerHTML = count;
// });

//-----------EXTRA WORK


var langItems = document.getElementsByClassName("list-item");
var arr_lang = ["Javascript", "Python", "Svelte", "Vue", "React", "Java", "C#", "Dart", "Kotlin", "Swift"]
var btnIncrease = document.querySelector("#plus");
var btnDecrease = document.querySelector("#minus");
var add = 0;
var count = 0;
btnIncrease.addEventListener("click", function () {
    count += 1;
    if (count >= 10) {
        count = 10;
    }
    counter.innerHTML = count;
    langItems[add].innerHTML = arr_lang[add];
    add += 1;
});
btnDecrease.addEventListener("click", function () {
    count -= 1;
    if (count <= 0) {
        count = 0;
    }
    counter.innerHTML = count;
    langItems[add].innerHTML = " ";
    add -= 1;
});

// 3 Во HTML напишете празна ul (unordered) list --> исто како на сликата
// во Javascript пополнете ја со имиња на пет програмски јазици (по избор)

// var listItems = document.getElementsByClassName("list-item");
// var arr = ["Javascript", "Python", "Svelte", "Vue", "React"]

// setTimeout(function () {
//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].innerHTML = arr[i];
//     }
// }, 2000);
// for (var i = 0; i < listItems.length; i++) {

//     listItems[i].innerHTML = "Javascript";
//     if (i === 1) {
//         listItems[i].innerHTML = "Python";
//     }
//     else if(i===2){
//         listItems[i].innerHTML = "Vue";
//     }
//     else if(i===3){
//         listItems[i].innerHTML = "React";
//     }
//     else{
//         listItems[i].innerHTML = "Flutter";
//     }
//     console.log(listItems[i]);
// }


//----------------------------------------------------------------------------------------

// 4 Во HTML линкувајте слика со помош на img тагот
// на клик на сликата, сменете го src-от во некоја друга слика

var metaImg = document.querySelector(".metaImg");
metaImg.addEventListener("click", function () {
    metaImg.src = "https://www.analyticsinsight.net/wp-content/uploads/2022/11/The-Latest-Innovations-That-Meta-Has-Come-Up-with-in-2022-1.jpg";
})



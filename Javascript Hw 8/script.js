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


// JSON -> Javascript Object Notation

// API -> Application Programming Interface

let person = `{
    "name": "Mario Petkovski",
    "location": "Aerdrom, Skopje, Macedonia",
    "age": 29,
    "hobbies": ["javascript", "film", "photography"],
    "address": {
        "street": "Bul. Pero Perovski 1000",
        "appartment": 14
    },
    "has_drivers_license": true
}`;

console.log(   person.location  );

// Promises

const promise = new Promise((resolve, reject) => {
    let result = 5;
    if(2 + 3 === result) {
        resolve("Promise RESOLVED");
    } else {
        reject("Promise REJECTED");
    }
});

promise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

const HasVacancy = new Promise((resolve, reject) => {
    let room_is_available = true;

    if(room_is_available) {
        setTimeout(() => {
            resolve("RESOLVED");
        }, 2000);
    } else {
        setTimeout(() => {
            reject("REJECTED");
        }, 2000);
    }
});


HasVacancy.then(res => {
    console.log(res);
}).catch(err => {
    alert(err);
});


// Fetch

fetch("https://www.boredapi.com/api/activity")
    .then(res => {
        console.log(res);
        if(res.ok) {
            return res.json();
        } else {
            console.error("Ne ti e okej API-to");
        }
    }).then(kako_sakas_moze => {
        console.log(kako_sakas_moze);
    }).catch(err => {
        console.log(err);
    });
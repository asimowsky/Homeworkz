//as i understood we need to merge the arrays below without kate and jill
var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];

var mergeFollowers = JohnFollowers.concat(JaneFollowers);
for (var i = 0; i < mergeFollowers.length; i++) {
    if (mergeFollowers[i] == "Kate") {
        mergeFollowers.splice([i], 1);
    }
    if (mergeFollowers[i] == "Jill") {
        mergeFollowers.splice([i], 1);
    }
}
console.log(mergeFollowers);

//super mario tower
var superMario = [];
for (var i = 0; i < 6; i++) {
    superMario.push("#");
    console.log(superMario.join(''));
}

//problem was solved only with console.log(superMario) but decided to research how to take out to hell that brackets and commas so pozdrav.

//multiplication table with nested loop
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = 0;
for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
        result = numbers[i] * numbers[j];
        console.log(`${numbers[i]} * ${numbers[j]} = ${result}`);
    }
}



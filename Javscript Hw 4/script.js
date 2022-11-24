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
     console.log(superMario);
   
}

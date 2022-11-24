//objects homework

var recipe = {
    title: "Pizza",
    serves: 2,
    ingredients:["flour","pepper","cheese","ketchup"]
}
console.log(recipe.title);
console.log(recipe.serves);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
console.log(recipe.ingredients[3]);

//array homework

var programmingLanguages = ["js","react","flutter","dart","c++","c#","java","python"];
console.log("Length of our array = "+programmingLanguages.length);
var removeLast = programmingLanguages.pop();
console.log("Removed last item: " + removeLast + " - items remaining: " + programmingLanguages);
var removeThird = programmingLanguages.splice(2, 1, 'Vbasic');
console.log(programmingLanguages);
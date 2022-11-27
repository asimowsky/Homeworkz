// Exercise 1

function ExClaim(string) {
    return `${string}!`;
}

console.log(ExClaim("React"))

//Exercise 2

var books = [
    {
        title: "Einstein: The Man and His Mind",
        Author: "Hanoch Gutfreund",
        Price: 500
    },
    {
        title: "Attila the Hun",
        Author: "William Napier",
        Price: 350
    },
    {
        title: "Harry Potter",
        Author: "J.K Rowling",
        Price: 650
    },
    {
        title: "Before Your Memory Fades",
        Author: "Toshikazu Kawaguch",
        Price: 220
    },
    {
        title: "The Life and Times of Nikola Tesla",
        Author: "Marc Seifer",
        Price: 390
    }

];

var filteredBooks = books.filter(book =>{
    return book.Price <= 400;
});

console.log(filteredBooks);


//Exercise 3

function CountMS(string1){
    let count = 0;
    for(let i=0; i<string1.length; i++){
        if(string1[i]==="M"){
            count++;
        }
    };
    return `In this string: ${string1} the letter M is used ${count} times`;
}

console.log(CountMS("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM"));

//Exercise 4

function CountCharacters(givenString,findLetter){
    let count = 0;
    for(let i=0; i<givenString.length; i++){
        if(givenString[i]===findLetter){
            count++;
        }
    };
    return `In this string: ${givenString} the letter ${findLetter} is used ${count} times`;
}
console.log(CountCharacters("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM", "W"));

//Exercise 5

let LargestNumber = (array1=[5,40,2,80,25]) =>{
    let largest = array1[0];  
    for( let i = 0; i<array1.length;i++){
        if(largest < array1[i]){
            largest = array1[i];
        }
    }
    console.log(largest);
}
console.log(LargestNumber())
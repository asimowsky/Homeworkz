// THE HELLO WORLD EXERCISE
var code = "tr";
if (code == "es") {
    console.log("Hola Mundo")

}
else if (code == "en") {
    console.log("Hello World")
}
else if (code == "tr") {
    console.log("Merhaba Dunya");
}
else {
    console.log("bye bye world")
}

//SEASONS (if statement)

// var seasons = prompt("Please enter any month ");

if (seasons == "september" || seasons == "october" || seasons == "november") {
    console.log("The season is Autumn");
}
else if (seasons == "december" || seasons == "january" || seasons == "february") {
    console.log("The season is Winter");
}
else if (seasons == "march" || seasons == "april" || seasons == "may") {
    console.log("The season is Spring");
}
else if (seasons == "june" || seasons == "july" || seasons == "august") {
    console.log("The season is Summer");
}
else {
    console.error("unknown");
}

// MUSICIANS

var band_members_num = 10;
switch (band_members_num) {
    case 1:
        console.log("band is uno");
        break;
    case 2:
        console.log("band is duo");
        break;
    case 3:
        console.log("band is trio");
        break;
    case 4:
        console.log("band is tetra");
        break;
    case 5:
        console.log("band is penta");
        break;
    case 6:
        console.log("band is hexa");
        break;
    case 7:
        console.log("band is hepta");
        break;
    case 8:
        console.log("band is okta");
        break;
    case 9:
        console.log("band is nona");
        break;
    case 10:
        console.log("band is deka");
        break;
        default: console.log("error");
}

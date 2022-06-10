// function smartpeople() {
//     let firstName = ["emile", "john", "tommy", "valorant", "james", "patrick"];
//     var ul = document.createElement("ul");
//     var li = document.createElement("li");

//     firstName.forEach((item) => {
//         document.getElementById("wrapper").appendChild(ul);
//         ul.appendChild(li);
//         li.innerHTML += `${item}`;

// smartPeople();

// to view in console only, *comment* the code above.

// var ul = document.createElement("ul");

// let names = [
//     " Shane Stevens ",
//     " Marshalino Jankowski ",
//     " Reagan Carolussen ",
//     " Emile Van Wyk ",
//     " Amanda Gudwla ",
//     " Ikhlaas Rawoot ",
// ];

// function smartPeople() {
//     console.log(ul + names);
// }

var smartPeople = [
    "Emile",
    "Marshalino",
    "Amanda",
    "Reagan",
    "Shane",
    "Monique"
];

var ul = document.createElement("ul");
document.getElementById("form").appendChild(ul);

smartPeople.forEach(function(name) {
    var li = document.createElement("li");

    ul.appendChild(li);
    li.innerHTML += name;
});
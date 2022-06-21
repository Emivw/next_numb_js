// let data = [7, 8, 3, 'Peter', 98.8, true, 'Joel', false];
// let onlyDigits = data.filter( (item)=> {
//     return typeof item === 'number' ? item : null;
// });
// console.log(onlyDigits);
// let onlyString = data.filter( (item)=> {
//     return typeof item === 'string' ? item : null;
// } );
// console.log(onlyString);
// let numbers = [2, 3, 4, 6];
// ** = sqrt()
// let modify = numbers.map( (item)=>{
//     return item ** item;
// } );
// console.log(modify);
// localStorage.removeItem('records');
let lists = JSON.parse(localStorage.getItem("records")) ?
    JSON.parse(localStorage.getItem("records")) : [{
        name: "Emile",
        surname: "vanwyk",
        colorRgb: "333.222.3"
    }];

function addData() {
    // e.preventDefault();
    lists.push({
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        colorRgb: document.getElementById("rgbColor").value,
    });
    // Save data to a localstorage
    localStorage.setItem("records", JSON.stringify(lists));
}
document.querySelector("#addRecord").addEventListener("click", addData);
document.querySelector("#addRecord").addEventListener("click", rgbToHex);

function rgbToHex() {
    let inputVal = document.getElementById("rgbColor").value;
    var values = /(\d{1,3})\D+(\d{1,3})\D+(\d{1,3})/g
        .exec(inputVal)
        .splice(1, 3);

    if (values.length !== 3) return false;

    var hexValue = "#";
    for (const value of values) {
        hexValue += parseInt(value).toString(16);
    }

    document.body.style.backgroundColor = `${hexValue}`;
}
// Displaying data
(function loadData() {

    console.table(lists);
})();
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
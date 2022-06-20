function calc() {
    let base = parseFloat(document.getElementById("base").value);
    let height = parseFloat(document.getElementById("height").value);
    let area = Math.floor((base * height) / 2);
    document.getElementById("output").innerHTML =
        "Hello, " + "the area of your triangle is " + area;
}
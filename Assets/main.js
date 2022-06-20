function rgbToHex() {
    let inputVal = document.getElementById("rgbColor").value;
    var values = /(\d{1,3})\D+(\d{1,3})\D+(\d{1,3})/g.exec(inputVal).splice(1, 3);

    if (values.length !== 3) return false;

    var hexValue = "#";
    for (const value of values) {
        hexValue += parseInt(value).toString(16);
    }

    document.getElementById("hexColor").value = hexValue;
    document.body.style.backgroundColor = `${hexValue}`;
}
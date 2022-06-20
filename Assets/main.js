const regex = /^#?([0-9a-fA-F]{3}){1,2}\b$/;
let rColor, gColor, bColor, getHexColor, hexColor;

function trueInput(val) {
    let check = regex.test(val);
    return check;
}

function hexToRGB() {
    getHexColor = document.getElementById("hexColor").value;
    if (trueInput(getHexColor)) {
        hexColor = getHexColor.replace(/#/g, "");
        if (hexColor.length === 6 || hexColor.length === 3) {
            if (hexColor.length === 3) {
                rColor = parseInt(hexColor.substring(0, 1).repeat(2), 16);
                gColor = parseInt(hexColor.substring(1, 2).repeat(2), 16);
                bColor = parseInt(hexColor.substring(2, 3).repeat(2), 16);
                document.getElementById("rgbColor").value =
                    "rgb(" + rColor + "," + gColor + "," + bColor + ")";
                document.body.style.backgroundColor =
                    "rgb(" + rColor + "," + gColor + "," + bColor + ")";
            } else {
                rColor = parseInt(hexColor.substring(0, 2), 16);
                gColor = parseInt(hexColor.substring(2, 4), 16);
                bColor = parseInt(hexColor.substring(4, 6), 16);
                document.getElementById("rgbColor").value =
                    "rgb(" + rColor + "," + gColor + "," + bColor + ")";
                document.body.style.backgroundColor =
                    "rgb(" + rColor + "," + gColor + "," + bColor + ")";
            }
        }
    } else {
        if (hexColor == "") {
            document.getElementById("rgbColor").value = "Result in RGB format";
        } else {
            document.getElementById("rgbColor").value = "incorrect value";
            document.getElementsByTagName("body")[0].style.backgroundColor =
                "rgb(255,255,255)";
        }
    }
}
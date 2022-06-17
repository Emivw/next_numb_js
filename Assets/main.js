function convertToSeconds() {
    let minutesVal = parseFloat(document.getElementById("input").value);
    let seconds = minutesVal * 60;
    document.getElementById("output").innerHTML = seconds.toFixed(2) + " Seconds";
}

function convertToMinutes() {
    let secondsVal = parseFloat(document.getElementById("input").value);
    let minutes = secondsVal / 60;
    document.getElementById("output").innerHTML = minutes.toFixed(2) + " Minutes";
}
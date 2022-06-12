window.onload = () => {
    let button = document.querySelector("#btn");
    // button.addEventListener("click", myFunction);
    button.addEventListener("click", function(event) {
        event.preventDefault(); // prevents form from submitting
    })
};

function myFunction() {
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    else {

        // calculation with Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) /
            10000)).toFixed(2);

        if (bmi < 18.6) result.innerHTML =
            `<p>Under Weight : <span>${bmi}</span></p>`;

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
            `<p>Normal : <span>${bmi}</span></p>`;

        else result.innerHTML =
            `<p>Over Weight : <span>${bmi}</span></p>`;

    }
}
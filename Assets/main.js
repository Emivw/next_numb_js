window.onload = () => {
    let button = document.querySelector("#btn");
    // Function for calculating BMI
    button.addEventListener("click", myFunction);
};

function myFunction() {
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    // If both input is valid, calculate the bmi
    else {

        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) /
            10000)).toFixed(2);

        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `<p>Under Weight : <span>${bmi}</span></p>`;

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
            `<p>Normal : <span>${bmi}</span></p>`;

        else result.innerHTML =
            `<p>Over Weight : <span>${bmi}</span></p>`;

    }
}
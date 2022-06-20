function calc() {
    let data = [5, 10, 50, 20, 15];
    let sum = 0;

    for (const value of data) {
        sum += value;
    }
    document.getElementById('output').innerHTML = `the sum of array ${data} is ${sum}`;
    console.log(data);
    console.log(sum);
}
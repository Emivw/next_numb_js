function calc() {
    let data = [5, 10, 50, 20, 15];
    let min = Math.min(...data);
    let max = Math.max(...data);
    document.getElementById('output').innerHTML = `the minimum value of the ${data} set is ${min} and the max is ${max}`;
    console.log(data);
}
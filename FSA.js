const calculateResults = () => {
    const n = parseInt(document.getElementById('number').value);
    
    if (isNaN(n) || n <= 0) {
        alert("Please enter a number greater than 0.");
        return;
    }

    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    document.getElementById('factorialresult').innerHTML = `Factorial of ${n} is: ${factorial}`;

    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);
    document.getElementById('sumresult').innerHTML = `Sum of first ${n} natural numbers is: ${sum}`;

    let sumForAverage = 0;
    for (let k = 1; k <= n; k++) {
        sumForAverage += k;
    }
    let average = sumForAverage / n;
    document.getElementById('averageresult').innerHTML = `Average of first ${n} natural numbers is: ${average.toFixed(2)}`;
}
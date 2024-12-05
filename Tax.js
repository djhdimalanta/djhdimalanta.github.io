const calculateTax = () => {
    const salary = parseFloat(document.getElementById("salary").value);
    let tax = 0;

    if (isNaN(salary) || salary < 0) {
        document.getElementById("result").innerHTML = "Please enter a valid salary.";
        return;
    }

    tax = salary <= 250000 ? 0 :
          salary <= 400000 ? (salary - 250000) * 0.20 :
          salary <= 800000 ? 30000 + (salary - 400000) * 0.25 :
          salary <= 2000000 ? 130000 + (salary - 800000) * 0.30 :
          salary <= 8000000 ? 490000 + (salary - 2000000) * 0.32 :
          2410000 + (salary - 8000000) * 0.35;

    document.getElementById("result").innerHTML = `Your calculated income tax is: P${tax.toFixed(2)}`;
};
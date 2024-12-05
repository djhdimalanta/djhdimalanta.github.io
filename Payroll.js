let payroll = [];
const addEmployees = () => {
    payroll = [];
};
const showEmployees = () => {
    let tb = '';
    let lno = 1;
    payroll.forEach(emp => {
        const trec = `
            <tr>
                <td class="ndata">${lno}</td>
                <td>${emp.name}</td>
                <td class="ndata">${emp.daysworked.toFixed(2)}</td>
                <td class="ndata">${emp.dailyrate.toFixed(2)}</td>
                <td class="ndata">${emp.grosspay}</td>
                <td class="ndata">${emp.deduction.toFixed(2)}</td>
                <td class="ndata">${emp.netpay}</td>
            </tr>
        `;
        tb += trec;
        lno++;
    });
    document.getElementById("tablebody").innerHTML = tb;
};

document.addEventListener("DOMContentLoaded", () => {
    addEmployees();
    showEmployees();

    document.getElementById("addEmployeeForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("empName").value.trim();
        const daysWorked = parseFloat(document.getElementById("daysWorked").value);
        const dailyRate = parseFloat(document.getElementById("dailyRate").value);
        const deduction = parseFloat(document.getElementById("deduction").value);
        if (name && daysWorked > 0 && dailyRate >= 0 && deduction >= 0) {
            const grossPay = (daysWorked * dailyRate).toFixed(2);
            const netPay = (grossPay - deduction).toFixed(2);
            payroll.push({
                name: name,
                daysworked: daysWorked,
                dailyrate: dailyRate,
                grosspay: grossPay,
                deduction: deduction,
                netpay: netPay,
            });
            e.target.reset();
            showEmployees();
        }
    });
    document.getElementById("btndelete").addEventListener("click", () => {
        const index = parseInt(document.getElementById("delemployee").value) - 1;
        if (index >= 0 && index < payroll.length) {
            payroll.splice(index, 1);
            document.getElementById("delemployee").value = '';
            showEmployees();
        }
    });
});
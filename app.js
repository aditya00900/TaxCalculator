function calculateTax() {
    // Get user inputs
    const grossIncome = document.getElementById('grossIncome').value;
    const extraIncome = document.getElementById('extraIncome').value;
    const deductions = document.getElementById('deductions').value;
    const ageGroup = document.getElementById('age').value;

    // Basic validation
    if (!grossIncome || !extraIncome || !deductions || !ageGroup) {
        alert("All fields are required.");
        return;
    }

    const totalIncome = parseFloat(grossIncome) + parseFloat(extraIncome);
    const totalDeductions = parseFloat(deductions);
    const netIncome = totalIncome - totalDeductions;
    
    let taxRate = 0;
    if (netIncome > 8e5) { // More than 8 lakhs
        if (ageGroup === "<40") taxRate = 0.30;
        else if (ageGroup === "40-59") taxRate = 0.20; // Assuming you meant 20% here, not 40%
        else if (ageGroup === "60+") taxRate = 0.10;
    } else {
        // You might want to show a different message or handle this scenario separately
    }

    const tax = netIncome > 8e5 ? (netIncome - 8e5) * taxRate : 0;

    // Displaying the result
    document.getElementById('resultBody').innerHTML = `Your tax is: ${tax.toFixed(2)} Rs.`;
    $('#resultModal').modal('show');
}

document.addEventListener("DOMContentLoaded", () => {
    const exchangeRate = 81.7722; // Set or fetch exchange rate dynamically
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("exchangeRate").textContent = `₹${exchangeRate.toFixed(2)} per $1`;
});

function calculateFees() {
    const desiredAmount = parseFloat(document.getElementById("desiredAmount").value);

    if (isNaN(desiredAmount) || desiredAmount <= 0) {
        document.getElementById("result").innerHTML = "<p>Please enter a valid amount.</p>";
        return;
    }

    const exchangeRate = 81.7722; // Set or fetch dynamically
    const transactionFeePercentage = 0.0753; // 7.53%
    const fixedFee = 0.30; // Fixed Fee in USD

    // Core Calculations
    const amountToAskUSD = (desiredAmount + fixedFee) / (1 - transactionFeePercentage);
    const totalFee = amountToAskUSD - desiredAmount;
    const receivedAmountINR = desiredAmount * exchangeRate;

    // Output Display
    document.getElementById("result").innerHTML = `
        <p>If you need <strong>$${desiredAmount.toFixed(2)}</strong>, PayPal will deduct <strong class="red-text">$${totalFee.toFixed(2)}</strong>.</p>
        <p>Ensure to ask need to ask <strong class="green-text">$${amountToAskUSD.toFixed(2)}</strong>.</p>
        <p>You will receive <strong class="green-text">₹${receivedAmountINR.toFixed(2)}</strong>.</p>
    `;
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
});

function calculateFees() {
    const desiredAmount = parseFloat(document.getElementById("desiredAmount").value);
    const exchangeRate = 81.7056;

    if (isNaN(desiredAmount) || desiredAmount <= 0) {
        document.getElementById("result").innerHTML = "<p>Please enter a valid amount.</p>";
        return;
    }

    // PayPal Fee Calculation
    const transactionFeePercentage = 0.0753; // 7.53%
    const fixedFee = 0.30; // Fixed Fee in USD
    const totalFee = (desiredAmount * transactionFeePercentage) + fixedFee;
    const netAmountUSD = desiredAmount - totalFee;

    // Calculate Amount to Ask
    const amountToAsk = (desiredAmount + fixedFee) / (1 - transactionFeePercentage);

    // Currency Conversion
    const netAmountINR = netAmountUSD * exchangeRate;
    const askedAmountINR = amountToAsk * exchangeRate;

    document.getElementById("result").innerHTML = `
        <p>If you need <strong>$${desiredAmount.toFixed(2)}</strong>, PayPal will deduct <strong>$${totalFee.toFixed(2)}</strong>.</p>
        <p>You will receive <strong>$${netAmountUSD.toFixed(2)}</strong>.</p>
        <p>Converted to INR: <strong>₹${netAmountINR.toFixed(2)}</strong>.</p>
        <p>To get <strong>$${desiredAmount.toFixed(2)}</strong>, ask for <strong class="highlight-green">$${amountToAsk.toFixed(2)}</strong>, which will be <strong>₹${askedAmountINR.toFixed(2)}</strong> at the exchange rate.</p>
    `;
}
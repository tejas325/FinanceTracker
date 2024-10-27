// Sample data to simulate existing transactions
const transactions = [
    { description: "Checking → Visa *2474 credit card payment", amount: 588.20, type: "positive" },
    { description: "Checking → Savings", amount: 1000.00, type: "positive" },
    { description: "Checking → Social security", amount: -540.00, type: "negative" },
    { description: "Checking → Income tax", amount: -940.00, type: "negative" },
    { description: "Checking → Salary", amount: 6200.00, type: "positive" }
];

let totalNetWorth = 35668;

// Function to add a new transaction
function addTransaction() {
    const description = document.querySelector('.transaction-form input[type="text"]').value;
    const amount = parseFloat(document.querySelector('.transaction-form input[type="number"]').value);
    const accountType = document.querySelector('.transaction-form select').value;

    if (!description || isNaN(amount)) {
        alert("Please fill in all fields correctly!");
        return;
    }

    const newTransaction = {
        description: `${accountType} → ${description}`,
        amount: amount,
        type: amount >= 0 ? "positive" : "negative"
    };

    // Add to transactions array
    transactions.push(newTransaction);

    // Update net worth
    totalNetWorth += amount;

    // Render the updated transaction list and net worth
    renderTransactions();
    updateNetWorth();

    // Clear form fields after submission
    document.querySelector('.transaction-form input[type="text"]').value = '';
    document.querySelector('.transaction-form input[type="number"]').value = '';
}

// Function to render the transactions on the dashboard
function renderTransactions() {
    const transactionTable = document.querySelector('.recent-transactions table');
    transactionTable.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const row = document.createElement('tr');

        const descCell = document.createElement('td');
        descCell.innerText = transaction.description;

        const amountCell = document.createElement('td');
        amountCell.innerText = `${transaction.amount.toFixed(2)} INR`;
        amountCell.classList.add(transaction.type === "positive" ? 'amount-positive' : 'amount-negative');

        const editCell = document.createElement('td');
        const editIcon = document.createElement('i');
        editIcon.classList.add('fas', 'fa-edit', 'edit-icon');
        editIcon.addEventListener('click', () => editTransaction(index));
        editCell.appendChild(editIcon);

        row.appendChild(descCell);
        row.appendChild(amountCell);
        row.appendChild(editCell);

        transactionTable.appendChild(row);
    });
}

// Function to update the displayed net worth
function updateNetWorth() {
    const netWorthElement = document.querySelector('.net-worth');
    netWorthElement.innerText = `${totalNetWorth.toFixed(2)} INR`;
}

// Placeholder function to handle transaction editing
function editTransaction(index) {
    alert("Edit functionality not implemented yet. Transaction ID: " + index);
}

// Attach the addTransaction function to the button click event
document.querySelector('.transaction-form button').addEventListener('click', addTransaction);

// Initial render of transactions and net worth
document.addEventListener('DOMContentLoaded', () => {
    renderTransactions();
    updateNetWorth();
});

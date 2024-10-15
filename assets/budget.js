
const addButton = document.getElementById('add-btn');
const tableBody = document.querySelector('tbody');
const form = document.querySelector('form');
const totalAmount = document.getElementById("total-amount");
const filterCategory = document.getElementById("filter-category");
const expense = [];

addButton.addEventListener('click', function (event) {
    event.preventDefault();
    const description = document.getElementById('category-select').value;
    const amount = document.getElementById('amount-input').value;
    const date = document.getElementById('date-input').value;
    const newRow = document.createElement('tr');
    const categoryColumn = document.createElement('td');
    const amountColumn = document.createElement('td');
    const dateColumn = document.createElement('td');
    categoryColumn.textContent = description;
    amountColumn.textContent = amount;
    dateColumn.textContent = date;

    const expenses = { id: Date.now(), category: description, amount: amount, date: date };

    expenses.push(expense);
    displayExpenses(expenses);
    updateTotalAmount();

    expenseForm.reset();


});

tableBody.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        row.remove();
        const id = parseInt(e.target.dataset.id);
        expenses = expenses.filter(expense => expense.id !== id);
        displayExpenses(expenses);
        updateTotalAmount();
    }
});


const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Table';
clearButton.id = 'clear-btn';
document.querySelector('thead tr').appendChild(clearButton);
clearButton.addEventListener('click', function () {
    tableBody.innerHTML = '';
});

document.addEventListener('DOMContentLoaded', function () {
    const expensesTableBody = document.getElementById('expenses-table-body');
    // Function to add a new expense row
    function addExpense(category, amount, date) {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${category}</td>
                <td>${amount}</td>
                <td>${date}</td>
                <td><button class="delete-btn">Delete</button></td>
            `;
        expensesTableBody.appendChild(row);
    }
    // Event listener for the Add button
    document.getElementById('add-btn').addEventListener('click', function (event) {
        event.preventDefault();
        const category = document.getElementById('category-select').value;
        const amount = document.getElementById('amount-input').value;
        const date = document.getElementById('date-input').value;
        if (category && amount && date) {
            addExpense(category, amount, date);
        }

    });
    // Event delegation for delete buttons
    expensesTableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            expensesTableBody.removeChild(row);
            addExpense(expense);
            updateTotalAmount();
        }
    });

    filterCategory.addEventListener("change", (e) => {
        const category = e.target.value;
        if (category === "All") {
            displayExpenses(expenses);
        } else {
            const filteredExpenses = expenses.filter(expense => expense.category === category);
            displayExpenses(filteredExpenses);
        }
    });

    function displayExpenses(expenses) {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${expense.name}</td>
                <td>$${expense.amount.toFixed(2)}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td>
                    <button class="delete-btn" data-id="${expense.id}">Delete</button>
                </td>
            `;

            expenseList.appendChild(row);
        });

        function updateTotalAmount() {
            const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
            totalAmount.textContent = total.toFixed(2);
        }
        // function updateTotalAmount() {
        //     let total = 0;
        //     const amounts = document.querySelectorAll('#expenses-table-body td:nth-child(2)');
        //     amounts.forEach(amount => {
        //         total += parseFloat(amount.textContent);
        //     });
        //     totalAmount.textContent = total;
        }
    });


document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('add-btn');
    const tableBody = document.querySelector('tbody');
    const form = document.querySelector('form');
    const totalAmount = document.getElementById("total-amount");
    const filterCategory = document.getElementById("filter-category");
    const expensesTableBody = document.getElementById('expenses-table-body');
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];


    // Event listener for the Add button
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

        // Validate amount
        if (isNaN(amount) || amount.trim() === "") {
            alert("Please enter a valid number for the amount.");
            updateTotalAmount();
            return;
        }

        const expense = { id: Date.now(), category: description, amount: parseFloat(amount), date: date };
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        displayExpenses(expenses);
        updateTotalAmount();

        form.reset();
    });

    // Event delegation for delete buttons
    tableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            row.remove();
            const id = parseInt(event.target.dataset.id);
            expenses = expenses.filter(expense => expense.id !== id);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            displayExpenses(expenses);
            updateTotalAmount();
        }
    });

    // Function that clear the table
    const clearButton=document.getElementById('clear-btn');
    clearButton.addEventListener('click', function (event) {
        console.log("Clear button clicked");
        localStorage.setItem("expenses", JSON.stringify([]));
        expenses = [];
        displayExpenses(expenses);
        updateTotalAmount();
        form.reset();
    });


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
        updateTotalAmount();
    });

    // Event delegation for delete buttons
    expensesTableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            expensesTableBody.removeChild(row);
            updateTotalAmount();
        }
    });

    // Event listener for the clear button
    filterCategory.addEventListener("change", (e) => {
        const category = e.target.value;
        if (category === "All") {
            displayExpenses(expenses);
            updateTotalAmount();
        } else {
            const filteredExpenses = expenses.filter(expense => expense.category === category);
            displayExpenses(filteredExpenses);
            console.log(filteredExpenses);
            updateTotalAmount();
        }

    });
    // Function to display expenses
    function displayExpenses(expenses) {
        expensesTableBody.innerHTML = "";
        expenses.forEach(expense => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${expense.category}</td>
                <td>${parseFloat(expense.amount).toFixed(2)}</td>
                <td>${expense.date}</td>
                <td>
                    <button class="delete-btn" data-id="${expense.id}">Delete</button>
                </td>
            `;
            expensesTableBody.appendChild(row);
            updateTotalAmount();
        });
    }

    // Function to update the total amount
    function updateTotalAmount() {
        let total = 0;
        const amounts = document.querySelectorAll('#expenses-table-body td:nth-child(2)');
        amounts.forEach(amount => {
            total += parseFloat(amount.textContent);
        });
        totalAmount.textContent = total.toFixed(2);
        console.log(amounts);
    }
    // Initial load of expenses from local storage
    displayExpenses(expenses);
    updateTotalAmount();

});

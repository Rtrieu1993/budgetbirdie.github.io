document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-btn');
    const tableBody = document.querySelector('tbody');
    const form = document.querySelector('form');


    addButton.addEventListener('click', function(event) {
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

        newRow.appendChild(categoryColumn);
        newRow.appendChild(amountColumn);
        newRow.appendChild(dateColumn);
        tableBody.appendChild(newRow);

        form.reset();
    });
});

tableBody.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        row.remove();
    }
});

function addDeleteButton(row) {
    const deleteColumn = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteColumn.appendChild(deleteButton);
    row.appendChild(deleteColumn);
}

addButton.addEventListener('click', function(event) {
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

    newRow.appendChild(categoryColumn);
    newRow.appendChild(amountColumn);
    newRow.appendChild(dateColumn);
    addDeleteButton(newRow);
    tableBody.appendChild(newRow);

    form.reset();
});

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Table';
clearButton.id = 'clear-btn';
document.querySelector('thead tr').appendChild(clearButton);

clearButton.addEventListener('click', function() {
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
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const expensesTableBody = document.getElementById('expenses-table-body');

        // Function to add a new expense row
        function addExpense(category, amount, date) {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${category}</td>
                <td>$${amount}</td>
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
            }
        });
    });




    const addButton = document.getElementById('add-btn');
    const table = document.getElementById('expense-table');
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');

    addButton.addEventListener('click', function(event) {
        event.preventDefault();

        const description = document.getElementById('category-select').value;
        const amount = document.getElementById('amount-input').value;
        const date = document.getElementById('date-input').value;
    console.log(description, amount, date);
        const newRow = document.createElement('tr');
        const categoryColumn = document.createElement('td');
        const amountColumn = document.createElement('td');
        const dateColumn = document.createElement('td');
        

        categoryColumn.textContent = description;
        amountColumn.textContent = amount;
        dateColumn.textContent = date;

        newRow.appendChild(categoryColumn, amountColumn, dateColumn);
        tableBody.appendChild(newRow);

        form.reset();
    });
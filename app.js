document.addEventListener("DOMContentLoaded", function () {
    const jenisAnggaranButton = document.getElementById('jenis-anggaran');
    const laporanKasKecilButton = document.getElementById('laporan-kas-kecil');
    const jenisAnggaranForm = document.getElementById('jenis-anggaran-form');
    const jenisAnggaranTable = document.getElementById('jenis-anggaran-table');

    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    jenisAnggaranButton.addEventListener('click', () => {
        // Menampilkan formulir dan tabel jenis anggaran
        jenisAnggaranForm.style.display = 'block';
        jenisAnggaranTable.style.display = 'block';

        // Menyembunyikan formulir atau tabel lain jika ada
        // Misalnya, menyembunyikan formulir dan tabel laporan kas kecil jika diperlukan
    });

    laporanKasKecilButton.addEventListener('click', () => {
        // Menampilkan formulir dan tabel laporan kas kecil
        // Disembunyikan formulir dan tabel jenis anggaran jika diperlukan
    });

    const rowIndex = 0;
    const table = document.querySelector('table tbody');

    // Membuat baris data baru
    const newRow = table.insertRow(rowIndex);


    // Menambahkan sel-sel data ke dalam baris
    newRow.innerHTML = `
    <td>2023-08-30</td>
    <td>001</td>
    <td>Pembelian barang</td>
    <td>500</td>
    <td></td>
    <td>35000</td>
    <td></td>
    <td></td>
    <td>
        <div class="button-cell">
        <button  id="editButton"><i class="fa-solid fa-pen"></i></button>
        <button id="deleteButton" class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
    </td>
`;

    // Menambahkan baris ke dalam tabel

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            const listItem = e.target.parentElement;
            taskList.removeChild(listItem);
        }
    });

    // Function to handle edit button click
    function handleEditButtonClick() {
        // Retrieve data from the table row if needed
        const row = newRow; // Change this to select the specific row you want to edit
        const cells = row.cells;
        const date = cells[0].textContent;
        const number = cells[1].textContent;
        const description = cells[2].textContent;
        const debit = cells[3].textContent;
        const kredit = cells[4].textContent;
        const jenisAnggaran = cells[5].textContent;

        // You can now implement your edit logic here
        // For example, open a modal for editing with these values
        // or populate an edit form with these values
        // ...

        alert(`Editing row with date: ${date}`);
    }

    // Function to handle delete button click
    function handleDeleteButtonClick() {
        // Retrieve data from the table row if needed
        const row = newRow; // Change this to select the specific row you want to delete

        // Remove the row from the table
        const table = document.querySelector('table tbody');
        table.removeChild(row);
        // You can implement your delete logic here
        // For example, confirm the deletion with a modal
        // or directly remove the row from the table
        // ...

        alert(`Deleting row with date: ${row}`);

    }

    // Add event listeners to the buttons
    const editButton = document.getElementById('editButton');
    const deleteButton = document.getElementById('deleteButton');

    editButton.addEventListener('click', handleEditButtonClick);
    deleteButton.addEventListener('click', handleDeleteButtonClick);

});
document.addEventListener("DOMContentLoaded", function () {
    const formLaporan = document.getElementById('form-laporan-kas-kecil');
    const tambahLaporanButton = document.getElementById('tambah-data-laporan');
    const dataForm = document.getElementById("data-form");
    const dataTable = document.getElementById("data-table");

    tambahLaporanButton.addEventListener('click', () => {
        // Menampilkan formulir dan tabel jenis anggaran
        formLaporan.style.display = 'block';
    });

    // Mengecek apakah ada data sebelumnya di session storage
    const storedData = JSON.parse(sessionStorage.getItem("storedData")) || [];

    // Menampilkan data yang sudah ada di session storage
    for (const data of storedData) {
        addDataToTable(data);
    }

    dataForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const tanggalInput = document.getElementById("tanggal");
        const buktiInput = document.getElementById("bukti");
        const keteranganInput = document.getElementById("keterangan");
        const penerimaanInput = document.getElementById("penerimaan");
        const pengeluaranInput = document.getElementById("pengeluaran");
        const akunInput = document.getElementById("akun");
        const nilaiInput = document.getElementById("nilai");

        const tanggal = tanggalInput.value.trim();
        const bukti = buktiInput.value.trim();
        const keterangan = keteranganInput.value.trim();
        const penerimaan = penerimaanInput.value.trim();
        const pengeluaran = pengeluaranInput.value.trim();
        const akun = akunInput.value.trim();
        const nilai = nilaiInput.value.trim();

        if (tanggal !== "" && bukti !== "") {
            const newData = {
                tanggal: tanggal,
                bukti: bukti,
                keterangan: keterangan,
                penerimaan: penerimaan,
                pengeluaran: pengeluaran,
                akun: akun,
                nilai: nilai,
            };

            // Menambahkan data ke tabel
            addDataToTable(newData);

            // Menyimpan data ke session storage
            storedData.push(newData);
            sessionStorage.setItem("storedData", JSON.stringify(storedData));

            // Mengosongkan formulir
            tanggalInput.value = "";
            buktiInput.value = "";
            keteranganInput.value = "";
            penerimaanInput.value = "";
            pengeluaranInput.value = "";
            akunInput.value = "";
            nilaiInput.value = "";
            formLaporan.style.display = 'none';
        }
    });

    function addDataToTable(data) {
        const row = dataTable.insertRow(2);
        const cellTanggal = row.insertCell(0);
        const cellBukti = row.insertCell(1);
        const cellKeterangan = row.insertCell(2);
        const cellPenerimaan = row.insertCell(3);
        const cellPengeluaran = row.insertCell(4);

        // Tambahkan sel-sel untuk setiap jenis akun yang mungkin ada
        const cellAkun1 = row.insertCell(5);
        const cellAkun2 = row.insertCell(6);
        const cellAkun3 = row.insertCell(7);
        const cellAkun4 = row.insertCell(8);
        const cellAkun5 = row.insertCell(9);
        const cellTidakan = row.insertCell(10);
        const divItem = document.createElement("div");
        divItem.classList.add("div-item");
        divItem.innerHTML = `
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        `;

        // Menambahkan event listener untuk tombol hapus
        const deleteButton = divItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function () {
            const rowToDelete = this.closest("tr");

            // Menghapus baris dari tabel
            if (rowToDelete) {
                rowToDelete.remove();
            }
        });



        cellTanggal.textContent = data.tanggal;
        cellBukti.textContent = data.bukti;
        cellKeterangan.textContent = data.keterangan;
        cellPenerimaan.textContent = data.penerimaan;
        cellPengeluaran.textContent = data.pengeluaran;
        cellTidakan.appendChild(divItem);


        // Tambahkan nilai ke sel akun yang sesuai
        if (data.akun = "1") {
            cellAkun1.textContent = data.nilai;
        } else if (data.akun = "2") {
            cellAkun2.textContent = data.nilai;
        } else if (data.akun = "3") {
            cellAkun3.textContent = data.nilai;
        } else if (data.akun = "4") {
            cellAkun4.textContent = data.nilai;
        } else if (data.akun = "5") {
            cellAkun5.textContent = data.nilai;
        }

    }
});
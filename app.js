document.addEventListener("DOMContentLoaded", function () {
    const formLaporan = document.getElementById('form-laporan-kas-kecil');
    const tambahLaporanButton = document.getElementById('tambah-data-laporan');
    const dataForm = document.getElementById("data-form");
    const dataTable = document.getElementById("data-table");

    tambahLaporanButton.addEventListener('click', () => {
        // Menampilkan formulir dan tabel jenis anggaran
        formLaporan.style.display = 'block';
    })
});

function validateForm() {
    var tanggal = document.getElementById("tanggal").value;
    var bukti = document.getElementById("bukti").value;
    var keterangan = document.getElementById("keterangan").value;
    var penerimaan = document.getElementById("penerimaan").value;
    var pengeluaran = document.getElementById("pengeluaran").value;
    var akun = document.getElementById("akun").value;
    var nilai = document.getElementById("nilai").value;
    if (tanggal == "" && bukti == "") {
        alert("tolong isi tanggal dan no bukti");
        return false;
    }
    return true;
}

function showData() {
    var reportList;
    if (localStorage.getItem("reportList") == null) {
        reportList = [];
    } else {
        reportList = JSON.parse(localStorage.getItem("reportList"));
    }

    var html = "";

    reportList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.tanggal + "</td>";
        html += "<td>" + element.bukti + "</td>";
        html += "<td>" + element.keterangan + "</td>";
        html += "<td>" + element.penerimaan + "</td>";
        html += "<td>" + element.pengeluaran + "</td>";
        if (element.akun === "1") {
            html += "<td>" + element.nilai + "</td>";
        } else {
            html += "<td>" + " " + "</td>"
        }
        if (element.akun === "2") {
            html += "<td>" + element.nilai + "</td>";
        } else {
            html += "<td>" + " " + "</td>"
        }
        if (element.akun === "3") {
            html += "<td>" + element.nilai + "</td>";
        } else {
            html += "<td>" + " " + "</td>"
        }
        if (element.akun === "4") {
            html += "<td>" + element.nilai + "</td>";
        } else {
            html += "<td>" + " " + "</td>"
        }
        if (element.akun === "5") {
            html += "<td>" + element.nilai + "</td>";
        } else {
            html += "<td>" + " " + "</td>"
        }
        html += '<td><button class="delete-btn" onclick="deleteData(' + index + ')">Hapus</button><button class="edit-btn" onclick="updateData(' + index + ')">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#data-table tbody").innerHTML = html;
}

document.onload = showData();

function addData() {
    if (validateForm() == true) {
        var tanggal = document.getElementById("tanggal").value;
        var bukti = document.getElementById("bukti").value;
        var keterangan = document.getElementById("keterangan").value;
        var penerimaan = document.getElementById("penerimaan").value;
        var pengeluaran = document.getElementById("pengeluaran").value;
        var akun = document.getElementById("akun").value;
        var nilai = document.getElementById("nilai").value;

        var reportList;
        if (localStorage.getItem("reportList") == null) {
            reportList = [];
        } else {
            reportList = JSON.parse(localStorage.getItem("reportList"));
        }

        reportList.push({
            tanggal: tanggal,
            bukti: bukti,
            keterangan: keterangan,
            penerimaan: penerimaan,
            pengeluaran: pengeluaran,
            akun: akun,
            nilai: nilai,
        });

        localStorage.setItem("reportList", JSON.stringify(reportList));

        showData();

        document.getElementById("tanggal").value = "";
        document.getElementById("bukti").value = "";
        document.getElementById("keterangan").value = "";
        document.getElementById("penerimaan").value = "";
        document.getElementById("pengeluaran").value = "";
        document.getElementById("akun").value = "";
        document.getElementById("nilai").value = "";
        document.getElementById('form-laporan-kas-kecil').style.display = "none";
    }
}

//Delete data
function deleteData(index) {
    var reportList;
    if (localStorage.getItem("reportList") == null) {
        reportList = [];
    } else {
        reportList = JSON.parse(localStorage.getItem("reportList"));
    }

    reportList.splice(index, 1);
    localStorage.setItem("reportList", JSON.stringify(reportList));
    showData();
}

//Update Data
function updateData(index) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementById('form-laporan-kas-kecil').style.display = "block";

    var reportList;
    if (localStorage.getItem("reportList") == null) {
        reportList = [];
    } else {
        reportList = JSON.parse(localStorage.getItem("reportList"));
    }

    document.getElementById("tanggal").value = reportList[index].tanggal;
    document.getElementById("bukti").value = reportList[index].bukti;
    document.getElementById("keterangan").value = reportList[index].keterangan;
    document.getElementById("penerimaan").value = reportList[index].penerimaan;
    document.getElementById("pengeluaran").value = reportList[index].pengeluaran;
    document.getElementById("akun").value = reportList[index].akun;
    document.getElementById("nilai").value = reportList[index].nilai;

    document.querySelector("#update").onclick = function () {
        if (validateForm() == true) {
            reportList[index].tanggal = document.getElementById("tanggal").value;
            reportList[index].bukti = document.getElementById("bukti").value;
            reportList[index].keterangan = document.getElementById("keterangan").value;
            reportList[index].penerimaan = document.getElementById("penerimaan").value;
            reportList[index].pengeluaran = document.getElementById("pengeluaran").value;
            reportList[index].akun = document.getElementById("akun").value;
            reportList[index].nilai = document.getElementById("nilai").value;

            localStorage.setItem("reportList", JSON.stringify(reportList));

            showData();

            document.getElementById("tanggal").value = "";
            document.getElementById("bukti").value = "";
            document.getElementById("keterangan").value = "";
            document.getElementById("penerimaan").value = "";
            document.getElementById("pengeluaran").value = "";
            document.getElementById("akun").value = "";
            document.getElementById("nilai").value = "";

            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
            document.getElementById('form-laporan-kas-kecil').style.display = "none";
        }
    }
}



// Deklarasi variabel saldo awal
let saldo = 0;

// fungsi tambah saldo
function TAMBAH_SALDO() {
    const tambah = parseFloat(prompt("Masukkan Saldo yg ingin ditambahkan"));
    if (!isNaN(tambah) && tambah > 0) {
        saldo += tambah;
        alert(`Saldo berhasil ditambahkan & Saldo sekarang: ${saldo}`);
    } else {
        alert('Saldo gagal ditambah');
    }
}

// fungsi kurang saldo
function KURANG_SALDO() {
    const kurang = parseFloat(prompt("Masukkan Saldo yg ingin dikurangi"));
    if (kurang > 0 && !isNaN(kurang) && kurang <= saldo) {
        saldo -= kurang;
        alert(`Saldo berhasil dikurangi & Saldo sekarang: ${saldo}`);
    } else {
        alert('Saldo gagal dikurangi');
    }
}
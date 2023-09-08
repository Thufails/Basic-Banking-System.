// // Deklarasi variabel saldo awal
// let saldo = 0;

// // fungsi tambah saldo
// function TAMBAH_SALDO() {
//     const tambah = parseFloat(prompt("Masukkan Saldo yg ingin ditambahkan"));
//     if (!isNaN(tambah) && tambah > 0) {
//         saldo += tambah;
//         alert(`Saldo berhasil ditambahkan & Saldo sekarang: ${saldo}`);
//     } else {
//         alert('Saldo gagal ditambah');
//     }
// }

// // fungsi kurang saldo
// function KURANG_SALDO() {
//     const kurang = parseFloat(prompt("Masukkan Saldo yg ingin dikurangi"));
//     if (kurang > 0 && !isNaN(kurang) && kurang <= saldo) {
//         saldo -= kurang;
//         alert(`Saldo berhasil dikurangi & Saldo sekarang: ${saldo}`);
//     } else {
//         alert('Saldo gagal dikurangi');
//     }
// }

class BankAccount {
    constructor() {
        this.saldo = 0;
    }

    deposit(jumlah) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (jumlah > 0) {
                    this.saldo += jumlah;
                    resolve(`Deposit ${jumlah} berhasil. Saldo sekarang: ${this.saldo}`);
                } else {
                    reject('Jumlah deposit harus lebih dari 0.');
                }
            }, 3000); // penundaan selama 3 detik
        });
    }

    withdraw(jumlah) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (jumlah > 0 && jumlah <= this.saldo) {
                    this.saldo -= jumlah;
                    resolve(`Penarikan ${jumlah} berhasil. Saldo sekarang: ${this.saldo}`);
                } else if (jumlah <= 0) {
                    reject('Jumlah penarikan harus lebih dari 0.');
                } else {
                    reject('Saldo tidak mencukupi.');
                }
            }, 3000); // penundaan selama 3 detik
        });
    }
}
module.exports = BankAccount;
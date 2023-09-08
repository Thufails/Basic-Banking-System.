class BankAccount {
    constructor() {
        this.saldo = 0;
    }

    deposit(jumlah) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (jumlah > 0) {
                    this.saldo += jumlah;
                    resolve(`Deposit uang sebanyak ${jumlah} berhasil. Saldo sekarang: ${this.saldo}`);
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
                    resolve(`Penarikan uang sebanyak ${jumlah} berhasil. Saldo sekarang: ${this.saldo}`);
                } else if (jumlah <= 0) {
                    reject('Jumlah penarikan harus lebih dari 0.');
                } else {
                    reject('Saldo tidak mencukupi.');
                }
            }, 3000); // penundaan selama 3 detik
        });
    }
}

// kelas memanggil BankAccount
const myAccount = new BankAccount();

// Transaksi Async
async function main() {
    try {
        console.log(await myAccount.deposit(5000)); // Deposit uang 5000
        console.log(await myAccount.withdraw(3000)); // Penarikan deposit 3000
        console.log(await myAccount.withdraw(3000)); // declare saldo tidak mencukupi
    } catch (error) {
        console.error(error);
    }
}

main();
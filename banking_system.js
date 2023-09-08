const BankAccount = require('./bank_account');

// kelas memanggil BankAccount
const myAccount = new BankAccount();

// Transaksi Async
async function main() {
    try {
        console.log(await myAccount.deposit(5000)); // Deposit 1000 berhasil. Saldo sekarang: 1000
        console.log(await myAccount.withdraw(3000)); // Penarikan 500 berhasil. Saldo sekarang: 500
        console.log(await myAccount.withdraw(3000)); // Saldo tidak mencukupi.
    } catch (error) {
        console.error(error);
    }
}

main();